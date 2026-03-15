const express = require('express');
const router  = express.Router();
const db      = require('../database');

// GET /chat/search?q=name&me=userId — search users by username (exclude self)
router.get('/search', (req, res) => {
  const { q, me } = req.query;
  if (!q || q.trim().length < 1) return res.json({ users: [] });

  const meId = parseInt(me, 10) || 0;
  const rows = db.prepare(
    "SELECT id, username FROM users WHERE username LIKE ? AND id != ? LIMIT 10"
  ).all(`%${q.trim()}%`, meId);

  return res.json({ users: rows });
});

// GET /chat/conversation?me=userId&with=userId — get last 50 messages between two users
router.get('/conversation', (req, res) => {
  const meId   = parseInt(req.query.me,   10);
  const withId = parseInt(req.query.with, 10);

  if (!meId || !withId) return res.status(400).json({ error: 'Missing me or with param.' });

  const rows = db.prepare(`
    SELECT m.id, m.sender_id, m.message, m.created_at,
           u.username AS sender_username
    FROM messages m
    JOIN users u ON u.id = m.sender_id
    WHERE (m.sender_id = ? AND m.recipient_id = ?)
       OR (m.sender_id = ? AND m.recipient_id = ?)
    ORDER BY m.created_at ASC
    LIMIT 50
  `).all(meId, withId, withId, meId);

  return res.json({ messages: rows });
});

// POST /chat/send — send a message
// body: { sender_id, recipient_id, message }
router.post('/send', (req, res) => {
  const { sender_id, recipient_id, message } = req.body;

  if (!sender_id || !recipient_id || !message || !message.trim()) {
    return res.status(400).json({ error: 'Missing fields.' });
  }
  if (message.trim().length > 500) {
    return res.status(400).json({ error: 'Message too long (max 500 chars).' });
  }

  const sender    = db.prepare('SELECT id FROM users WHERE id = ?').get(Number(sender_id));
  const recipient = db.prepare('SELECT id FROM users WHERE id = ?').get(Number(recipient_id));
  if (!sender || !recipient) return res.status(404).json({ error: 'User not found.' });

  db.prepare(
    'INSERT INTO messages (sender_id, recipient_id, message) VALUES (?, ?, ?)'
  ).run(Number(sender_id), Number(recipient_id), message.trim());

  return res.json({ ok: true });
});

// GET /chat/inbox?me=userId — list recent conversations (last message per contact)
// Uses GROUP BY instead of window functions for sql.js compatibility
router.get('/inbox', (req, res) => {
  const meId = parseInt(req.query.me, 10);
  if (!meId) return res.status(400).json({ error: 'Missing me param.' });

  const rows = db.prepare(`
    SELECT partner_id, partner_username, message AS last_message, created_at AS last_at
    FROM (
      SELECT
        CASE WHEN m.sender_id = ? THEN m.recipient_id ELSE m.sender_id END AS partner_id,
        CASE WHEN m.sender_id = ? THEN ru.username   ELSE su.username   END AS partner_username,
        m.message,
        m.created_at
      FROM messages m
      JOIN users su ON su.id = m.sender_id
      JOIN users ru ON ru.id = m.recipient_id
      WHERE m.sender_id = ? OR m.recipient_id = ?
      ORDER BY m.created_at DESC
    )
    GROUP BY partner_id
    ORDER BY last_at DESC
    LIMIT 20
  `).all(meId, meId, meId, meId);

  return res.json({ conversations: rows });
});

module.exports = router;
