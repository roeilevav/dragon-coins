const express = require('express');
const router = express.Router();
const db = require('../database');

// GET /leaderboard — top 10 users by points
router.get('/', (req, res) => {
  const rows = db.prepare(
    'SELECT id, username, points FROM users ORDER BY points DESC LIMIT 10'
  ).all();

  return res.json({ leaderboard: rows });
});

module.exports = router;
