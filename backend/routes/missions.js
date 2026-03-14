const express = require('express');
const router  = express.Router();
const db      = require('../database');

// GET /missions/completed?user_id=X
// Returns the list of mission IDs this user has already completed
router.get('/completed', (req, res) => {
  const userId = Number(req.query.user_id);
  if (!userId) return res.status(400).json({ error: 'user_id required' });

  const rows = db.prepare(
    'SELECT mission_id FROM completed_missions WHERE user_id = ?'
  ).all(userId);

  res.json({ completed: rows.map(r => r.mission_id) });
});

// POST /missions/complete
// body: { user_id, mission_id, reward }
// Awards coins and records completion — idempotent-safe (409 if already done)
router.post('/complete', (req, res) => {
  const { user_id, mission_id, reward } = req.body;

  if (!user_id || !mission_id || reward == null) {
    return res.status(400).json({ error: 'user_id, mission_id, and reward are required' });
  }

  // Guard: already completed?
  const existing = db.prepare(
    'SELECT id FROM completed_missions WHERE user_id = ? AND mission_id = ?'
  ).get(Number(user_id), mission_id);

  if (existing) {
    return res.status(409).json({ error: 'Mission already completed' });
  }

  // Verify the user actually owns every required item (server-side safety check)
  // The frontend sends the required item names for verification
  const { required_items } = req.body;
  if (Array.isArray(required_items) && required_items.length > 0) {
    const owned = db.prepare(
      'SELECT item_name FROM inventory WHERE user_id = ? AND listed_price IS NULL'
    ).all(Number(user_id)).map(r => r.item_name);

    for (const item of required_items) {
      if (!owned.includes(item)) {
        return res.status(403).json({ error: `Missing required item: ${item}` });
      }
    }
  }

  // Award coins, remove required items, and record completion — all atomically
  const doComplete = db.transaction(() => {
    // Consume each required item (one copy per item name)
    if (Array.isArray(required_items)) {
      for (const itemName of required_items) {
        const row = db.prepare(
          'SELECT id FROM inventory WHERE user_id = ? AND item_name = ? AND listed_price IS NULL LIMIT 1'
        ).get(Number(user_id), itemName);
        if (row) {
          db.prepare('DELETE FROM inventory WHERE id = ?').run(row.id);
        }
      }
    }
    db.prepare('UPDATE users SET coins = coins + ? WHERE id = ?').run(Number(reward), Number(user_id));
    db.prepare(
      'INSERT INTO completed_missions (user_id, mission_id) VALUES (?, ?)'
    ).run(Number(user_id), mission_id);
  });
  doComplete();

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(Number(user_id));
  res.json({ user, coins_earned: Number(reward) });
});

module.exports = router;
