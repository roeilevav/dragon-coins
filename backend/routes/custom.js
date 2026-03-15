const express = require('express');
const router  = express.Router();
const db      = require('../database');

const SACRIFICE_COUNT = 5;

// POST /custom/create
// body: { user_id, item_name, creator_name, item_image (base64 dataURL), sacrifice_ids[] }
router.post('/create', (req, res) => {
  const { user_id, item_name, creator_name, item_image, sacrifice_ids } = req.body;

  // Basic field validation
  if (!user_id || !item_name || !creator_name || !item_image) {
    return res.status(400).json({ error: 'item_name, creator_name, and item_image are required' });
  }
  if (!Array.isArray(sacrifice_ids) || sacrifice_ids.length !== SACRIFICE_COUNT) {
    return res.status(400).json({ error: `You must sacrifice exactly ${SACRIFICE_COUNT} crafted items` });
  }

  // Verify every sacrificed item belongs to this user and is a crafted item
  for (const id of sacrifice_ids) {
    const row = db.prepare(
      'SELECT id FROM inventory WHERE id = ? AND user_id = ? AND is_crafted = 1'
    ).get(Number(id), Number(user_id));
    if (!row) {
      return res.status(403).json({ error: `Item ${id} is not a crafted item owned by you` });
    }
  }

  // Atomically: delete the 5 sacrificed crafted items, insert the new custom item
  const doCreate = db.transaction(() => {
    for (const id of sacrifice_ids) {
      db.prepare('DELETE FROM inventory WHERE id = ?').run(Number(id));
    }
    db.prepare(`
      INSERT INTO inventory
        (user_id, item_name, merchant_name, price_paid, is_custom, creator_name, item_image)
      VALUES (?, ?, 'Custom', 0, 1, ?, ?)
    `).run(Number(user_id), item_name.trim(), creator_name.trim(), item_image);
    // Award 45 points for creating a custom item
    db.prepare('UPDATE users SET points = points + 45 WHERE id = ?').run(Number(user_id));
  });
  doCreate();

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(Number(user_id));
  const newItem = db.prepare(
    'SELECT * FROM inventory WHERE user_id = ? AND is_custom = 1 ORDER BY id DESC LIMIT 1'
  ).get(Number(user_id));

  res.json({ user, item: newItem });
});

module.exports = router;
