const express = require('express');
const router = express.Router();
const db = require('../database');

// GET /listings — all active player listings
router.get('/', (req, res) => {
  const listings = db.prepare(`
    SELECT i.id, i.user_id, u.username AS seller_username,
           i.item_name, i.listed_price
    FROM inventory i
    JOIN users u ON i.user_id = u.id
    WHERE i.listed_price IS NOT NULL
    ORDER BY i.id DESC
  `).all();
  return res.json({ listings });
});

// POST /listings/:itemId/buy — buy a player-listed item
router.post('/:itemId/buy', (req, res) => {
  const itemId = parseInt(req.params.itemId, 10);
  const { buyer_id, quiz_correct } = req.body;

  if (!buyer_id) return res.status(400).json({ error: 'buyer_id required.' });

  const item = db.prepare(
    'SELECT * FROM inventory WHERE id = ? AND listed_price IS NOT NULL'
  ).get(itemId);
  if (!item) return res.status(404).json({ error: 'Listing not found or already sold.' });

  if (item.user_id === buyer_id) {
    return res.status(400).json({ error: 'Cannot buy your own listing.' });
  }

  const buyer = db.prepare('SELECT * FROM users WHERE id = ?').get(buyer_id);
  if (!buyer) return res.status(404).json({ error: 'Buyer not found.' });

  // Apply 40% discount if the buyer answered the quiz correctly
  const price = quiz_correct === true
    ? Math.round(item.listed_price * 0.6)
    : item.listed_price;

  if (buyer.coins < price) return res.status(402).json({ error: 'Insufficient coins.' });

  const seller = db.prepare('SELECT username FROM users WHERE id = ?').get(item.user_id);

  const tx = db.transaction(() => {
    db.prepare('UPDATE users SET coins = coins - ? WHERE id = ?').run(price, buyer_id);
    db.prepare('UPDATE users SET coins = coins + ? WHERE id = ?').run(price, item.user_id);
    db.prepare(`
      UPDATE inventory
      SET user_id = ?, merchant_name = ?, listed_price = NULL, bought_at = datetime('now')
      WHERE id = ?
    `).run(buyer_id, `From ${seller.username}`, itemId);
  });
  tx();

  const updatedBuyer = db.prepare('SELECT * FROM users WHERE id = ?').get(buyer_id);
  return res.json({ success: true, user: updatedBuyer });
});

module.exports = router;
