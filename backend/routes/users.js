const express = require('express');
const crypto  = require('crypto');
const router  = express.Router();
const db      = require('../database');

const USERNAME_REGEX = /^[a-zA-Z0-9]{1,10}$/;
const COOLDOWN_MS    = 60 * 1000; // 1 minute
const ROLL_COST      = 5;

// ---- Quiz questions (server-side so answers can't be cheated) ----
const QUIZ_POOL = [
  { q: 'What is 7 × 8?',                          options: ['54', '56', '48', '64'],                    correct: 1 },
  { q: 'Which planet is closest to the Sun?',      options: ['Venus', 'Earth', 'Mercury', 'Mars'],       correct: 2 },
  { q: 'How many sides does a hexagon have?',      options: ['5', '7', '8', '6'],                        correct: 3 },
  { q: 'What is the fastest land animal?',         options: ['Lion', 'Cheetah', 'Horse', 'Leopard'],     correct: 1 },
  { q: 'What colour do you get mixing red + blue?',options: ['Green', 'Orange', 'Purple', 'Brown'],      correct: 2 },
  { q: 'What is 144 ÷ 12?',                       options: ['10', '14', '13', '12'],                    correct: 3 },
  { q: 'Which is the largest ocean?',              options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3 },
  { q: 'How many bones are in the human body?',   options: ['106', '206', '306', '406'],                 correct: 1 },
  { q: 'What is the chemical symbol for water?',  options: ['WA', 'HO', 'H2O', 'H2'],                   correct: 2 },
  { q: 'Which animal has the longest neck?',      options: ['Elephant', 'Camel', 'Giraffe', 'Ostrich'], correct: 2 },
  { q: 'What is 15 × 15?',                        options: ['200', '225', '175', '250'],                 correct: 1 },
  { q: 'On which continent is Egypt?',            options: ['Asia', 'Europe', 'Africa', 'South America'],correct: 2 },
  { q: 'How many letters in the English alphabet?',options: ['24', '26', '28', '25'],                    correct: 1 },
  { q: 'What gas do plants absorb from the air?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correct: 2 },
  { q: 'What is the square root of 81?',          options: ['7', '8', '9', '10'],                       correct: 2 },
  { q: 'Which planet is known for its rings?',    options: ['Mars', 'Jupiter', 'Saturn', 'Neptune'],    correct: 2 },
  { q: 'How many minutes are in 2 hours?',        options: ['100', '120', '140', '180'],                 correct: 1 },
  { q: 'What is the tallest mountain on Earth?',  options: ['K2', 'Kilimanjaro', 'Everest', 'Mont Blanc'], correct: 2 },
  { q: 'Which is the largest animal on Earth?',   options: ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'], correct: 1 },
  { q: 'What is 9 × 9?',                          options: ['72', '81', '63', '90'],                    correct: 1 },
  { q: 'How many hours in a day?',                options: ['12', '24', '48', '36'],                    correct: 1 },
  { q: 'What is the capital of France?',          options: ['Rome', 'Madrid', 'Paris', 'Berlin'],       correct: 2 },
  { q: 'How many planets are in our solar system?',options: ['7', '8', '9', '10'],                      correct: 1 },
  { q: 'What is 13 × 7?',                         options: ['81', '90', '91', '84'],                    correct: 2 },
  { q: 'Which colour is NOT in a rainbow?',        options: ['Red', 'Pink', 'Blue', 'Green'],            correct: 1 },
];

// In-memory pending rolls: token → { userId, earned, correctIndex, expiresAt }
const pendingRolls = new Map();

// Clean expired tokens every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [token, data] of pendingRolls) {
    if (now > data.expiresAt) pendingRolls.delete(token);
  }
}, 5 * 60 * 1000);

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

// POST /users/:id/roll/start — pay 5 coins, get a quiz question + token
router.post('/:id/roll/start', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  if (!user) return res.status(404).json({ error: 'User not found.' });

  // Cooldown check
  const now = Date.now();
  if (user.last_roll_at) {
    const lastRoll = new Date(user.last_roll_at).getTime();
    const elapsed = now - lastRoll;
    if (elapsed < COOLDOWN_MS) {
      return res.status(429).json({ error: 'Cooldown active.', remaining_ms: COOLDOWN_MS - elapsed });
    }
  }

  // Check balance
  if (user.coins < ROLL_COST) {
    return res.status(402).json({ error: `You need at least ${ROLL_COST} coins to roll!` });
  }

  // Deduct cost and set cooldown
  const nowISO = new Date(now).toISOString();
  db.prepare('UPDATE users SET coins = coins - ?, last_roll_at = ? WHERE id = ?')
    .run(ROLL_COST, nowISO, userId);

  // Pick random question
  const qi    = Math.floor(Math.random() * QUIZ_POOL.length);
  const q     = QUIZ_POOL[qi];
  const earned = Math.floor(Math.random() * 41) + 40; // 40–80

  // Generate token
  const token = crypto.randomBytes(16).toString('hex');
  pendingRolls.set(token, {
    userId,
    earned,
    correctIndex: q.correct,
    expiresAt: now + 2 * 60 * 1000, // 2 min to answer
  });

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  return res.json({
    token,
    cost: ROLL_COST,
    question: q.q,
    options: q.options,
    user: updated,
  });
});

// POST /users/:id/roll/answer — submit quiz answer, get reward if correct
router.post('/:id/roll/answer', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { token, answer } = req.body;

  if (!token || typeof answer !== 'number') {
    return res.status(400).json({ error: 'Missing token or answer.' });
  }

  const pending = pendingRolls.get(token);
  if (!pending) return res.status(404).json({ error: 'Invalid or expired roll token.' });

  // One-time use
  pendingRolls.delete(token);

  if (pending.userId !== userId) return res.status(403).json({ error: 'Token does not belong to this user.' });

  if (Date.now() > pending.expiresAt) {
    return res.status(410).json({ error: 'Roll token expired.' });
  }

  const isCorrect = answer === pending.correctIndex;

  if (isCorrect) {
    db.prepare('UPDATE users SET coins = coins + ? WHERE id = ?')
      .run(pending.earned, userId);
  }

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  return res.json({
    correct: isCorrect,
    correctIndex: pending.correctIndex,
    earned: isCorrect ? pending.earned : 0,
    lost: ROLL_COST,
    user: updated,
  });
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
