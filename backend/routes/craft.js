const express = require('express');
const router  = express.Router();
const db      = require('../database');

// POST /craft/make
// body: { user_id, craft_id, craft_name, craft_emoji, required_items[] }
// Consumes required items from inventory and adds the crafted item
router.post('/make', (req, res) => {
  const { user_id, craft_id, craft_name, craft_emoji, required_items } = req.body;

  if (!user_id || !craft_id || !craft_name || !Array.isArray(required_items) || required_items.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Server-side ownership check — only unlisted, non-crafted market items count as ingredients
  const owned = db.prepare(
    'SELECT item_name FROM inventory WHERE user_id = ? AND listed_price IS NULL AND is_crafted = 0'
  ).all(Number(user_id)).map(r => r.item_name);

  for (const item of required_items) {
    if (!owned.includes(item)) {
      return res.status(403).json({ error: `Missing required item: ${item}` });
    }
  }

  // Atomically: consume ingredients → add crafted item
  const doCraft = db.transaction(() => {
    for (const itemName of required_items) {
      const row = db.prepare(
        'SELECT id FROM inventory WHERE user_id = ? AND item_name = ? AND listed_price IS NULL AND is_crafted = 0 LIMIT 1'
      ).get(Number(user_id), itemName);
      if (row) {
        db.prepare('DELETE FROM inventory WHERE id = ?').run(row.id);
      }
    }
    // Insert the crafted item (is_crafted = 1, price_paid = 0, merchant = 'Crafted')
    db.prepare(
      `INSERT INTO inventory (user_id, item_name, merchant_name, price_paid, is_crafted)
       VALUES (?, ?, 'Crafted', 0, 1)`
    ).run(Number(user_id), craft_name);
    // Award 15 points for crafting
    db.prepare('UPDATE users SET points = points + 15 WHERE id = ?').run(Number(user_id));
  });
  doCraft();

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(Number(user_id));
  res.json({ user, crafted_item: craft_name });
});

module.exports = router;
