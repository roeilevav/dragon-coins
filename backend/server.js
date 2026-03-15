const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDb } = require('./database');

async function start() {
  await initDb();

  const usersRouter      = require('./routes/users');
  const leaderboardRouter = require('./routes/leaderboard');
  const listingsRouter   = require('./routes/listings');
  const craftRouter      = require('./routes/craft');
  const customRouter     = require('./routes/custom');
  const chatRouter       = require('./routes/chat');

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json({ limit: '10mb' })); // allow base64 images in custom items

  // Serve the frontend — multiple users can open http://localhost:3000 in separate tabs
  app.use(express.static(path.join(__dirname, '../frontend')));

  app.use('/users', usersRouter);
  app.use('/leaderboard', leaderboardRouter);
  app.use('/listings', listingsRouter);
  app.use('/craft', craftRouter);
  app.use('/custom', customRouter);
  app.use('/chat', chatRouter);

  // Global error handler
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });

  app.listen(PORT, () => {
    console.log(`Dragon Coins running at http://localhost:${PORT}`);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
