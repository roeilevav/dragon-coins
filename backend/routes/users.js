const express = require('express');
const router = express.Router();
const db = require('../database');

const USERNAME_REGEX = /^[a-zA-Z0-9]{1,10}$/;
const COOLDOWN_MS = 60 * 1000; // 1 minute

// POST /users/login — create or fetch user by username
router.post('/login', (req, res) => {
  const { username } = req.body;

  if (!username || !USERNAME_REGEX.test(username)) {
    return res.status(400).json({ error: 'Invalid username. Use 1–10 alphanumeric characters only.' });
  }

  const existing = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

  if (existing) {
    return res.json({ user: existing, created: false });
  }

  const result = db.prepare(
    'INSERT INTO users (username, coins) VALUES (?, 0)'
  ).run(username);

  const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);
  return res.status(201).json({ user: newUser, created: true });
});

// POST /users/:id/roll — award random coins with 30-min cooldown
router.post('/:id/roll', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const now = Date.now();

  if (user.last_roll_at) {
    const lastRoll = new Date(user.last_roll_at).getTime();
    const elapsed = now - lastRoll;
    if (elapsed < COOLDOWN_MS) {
      const remaining = COOLDOWN_MS - elapsed;
      return res.status(429).json({
        error: 'Cooldown active.',
        remaining_ms: remaining
      });
    }
  }

  const earned = Math.floor(Math.random() * 41) + 40; // 40–80
  const nowISO = new Date(now).toISOString();

  db.prepare('UPDATE users SET coins = coins + ?, last_roll_at = ? WHERE id = ?')
    .run(earned, nowISO, userId);

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  return res.json({ earned, user: updated });
});

// GET /users/:id/inventory — get all purchased items
router.get('/:id/inventory', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = db.prepare('SELECT id FROM users WHERE id = ?').get(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const items = db.prepare(
    'SELECT * FROM inventory WHERE user_id = ? ORDER BY bought_at DESC'
  ).all(userId);

  return res.json({ items });
});

// POST /users/:id/buy — buy an item
router.post('/:id/buy', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { item_name, merchant_name, price } = req.body;

  if (!item_name || !merchant_name || typeof price !== 'number' || price < 1) {
    return res.status(400).json({ error: 'Missing or invalid purchase details.' });
  }

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  if (user.coins < price) {
    return res.status(402).json({ error: 'Insufficient coins.' });
  }

  // Atomic transaction: deduct coins and insert inventory row
  const purchase = db.transaction(() => {
    db.prepare('UPDATE users SET coins = coins - ? WHERE id = ?').run(price, userId);
    db.prepare(
      'INSERT INTO inventory (user_id, item_name, merchant_name, price_paid) VALUES (?, ?, ?, ?)'
    ).run(userId, item_name, merchant_name, price);
  });

  purchase();

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  return res.json({ success: true, user: updated });
});

// POST /users/:id/inventory/:itemId/list — put an item up for sale
router.post('/:id/inventory/:itemId/list', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const itemId = parseInt(req.params.itemId, 10);
  const { price } = req.body;

  if (typeof price !== 'number' || !Number.isInteger(price) || price < 1 || price > 999) {
    return res.status(400).json({ error: 'Price must be a whole number between 1 and 999.' });
  }

  const item = db.prepare('SELECT * FROM inventory WHERE id = ? AND user_id = ?').get(itemId, userId);
  if (!item) return res.status(404).json({ error: 'Item not found.' });

  db.prepare('UPDATE inventory SET listed_price = ? WHERE id = ?').run(price, itemId);
  return res.json({ success: true });
});

// POST /users/:id/inventory/:itemId/unlist — remove from sale
router.post('/:id/inventory/:itemId/unlist', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const itemId = parseInt(req.params.itemId, 10);

  const item = db.prepare('SELECT * FROM inventory WHERE id = ? AND user_id = ?').get(itemId, userId);
  if (!item) return res.status(404).json({ error: 'Item not found.' });

  db.prepare('UPDATE inventory SET listed_price = NULL WHERE id = ?').run(itemId);
  return res.json({ success: true });
});

module.exports = router;
