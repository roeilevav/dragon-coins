const path = require('path');
const fs = require('fs');

// DB_PATH can be overridden by an environment variable so Railway can
// point it at a persistent Volume (e.g. /data/dragon_coins.db).
// Without the env var it falls back to the local backend/ folder,
// which is fine for local development.
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'dragon_coins.db');

// Make sure the directory exists (important when using a mounted Volume)
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
  console.log(`[DB] Created directory: ${dbDir}`);
}

console.log(`[DB] Using database at: ${DB_PATH}`);

let _sqlDb = null;
let _inTransaction = false;

function _save() {
  if (_inTransaction) return;
  const data = _sqlDb.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

class PreparedStatement {
  constructor(sql) {
    this.sql = sql;
  }

  get(...params) {
    const stmt = _sqlDb.prepare(this.sql);
    if (params.length) stmt.bind(params);
    const row = stmt.step() ? stmt.getAsObject() : undefined;
    stmt.free();
    return row;
  }

  all(...params) {
    const stmt = _sqlDb.prepare(this.sql);
    if (params.length) stmt.bind(params);
    const rows = [];
    while (stmt.step()) rows.push(stmt.getAsObject());
    stmt.free();
    return rows;
  }

  run(...params) {
    _sqlDb.run(this.sql, params.length ? params : []);
    const rowId = _sqlDb.exec('SELECT last_insert_rowid()')[0]?.values[0][0];
    _save();
    return { lastInsertRowid: rowId };
  }
}

// db proxy — routes import this directly, safe to call after initDb()
const db = {
  prepare(sql) {
    return new PreparedStatement(sql);
  },

  exec(sql) {
    _sqlDb.exec(sql);
    _save();
  },

  pragma(str) {
    // sql.js runs in-memory (WAL not applicable); silently ignore
  },

  transaction(fn) {
    return () => {
      _sqlDb.run('BEGIN');
      _inTransaction = true;
      try {
        fn();
        _sqlDb.run('COMMIT');
        _inTransaction = false;
        _save();
      } catch (e) {
        _sqlDb.run('ROLLBACK');
        _inTransaction = false;
        throw e;
      }
    };
  }
};

async function initDb() {
  const initSqlJs = require('sql.js');
  const SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const fileBuffer = fs.readFileSync(DB_PATH);
    _sqlDb = new SQL.Database(fileBuffer);
  } else {
    _sqlDb = new SQL.Database();
  }

  _sqlDb.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      coins INTEGER NOT NULL DEFAULT 0,
      last_roll_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS inventory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      item_name TEXT NOT NULL,
      merchant_name TEXT NOT NULL,
      price_paid INTEGER NOT NULL,
      bought_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Migration: add listed_price to inventory for player-to-player selling
  try { _sqlDb.exec('ALTER TABLE inventory ADD COLUMN listed_price INTEGER'); } catch (e) {}

  // Migration: mark crafted items separately from market items
  try { _sqlDb.exec('ALTER TABLE inventory ADD COLUMN is_crafted INTEGER NOT NULL DEFAULT 0'); } catch (e) {}

  // Migration: custom user-created items
  try { _sqlDb.exec('ALTER TABLE inventory ADD COLUMN is_custom INTEGER NOT NULL DEFAULT 0'); } catch (e) {}
  try { _sqlDb.exec('ALTER TABLE inventory ADD COLUMN creator_name TEXT'); } catch (e) {}
  try { _sqlDb.exec('ALTER TABLE inventory ADD COLUMN item_image TEXT'); } catch (e) {}

  // Migration: track which roll questions each user has already seen
  try { _sqlDb.exec("ALTER TABLE users ADD COLUMN seen_questions TEXT NOT NULL DEFAULT '[]'"); } catch (e) {}

  // Migration: leaderboard points (earned coins + boss wins + crafts + customs)
  try { _sqlDb.exec('ALTER TABLE users ADD COLUMN points INTEGER NOT NULL DEFAULT 0'); } catch (e) {}

  // Chat messages between players
  _sqlDb.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_id    INTEGER NOT NULL,
      recipient_id INTEGER NOT NULL,
      message      TEXT    NOT NULL,
      created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (sender_id)    REFERENCES users(id),
      FOREIGN KEY (recipient_id) REFERENCES users(id)
    );
  `);

  // Missions: track which missions each user has completed
  _sqlDb.exec(`
    CREATE TABLE IF NOT EXISTS completed_missions (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id     INTEGER NOT NULL,
      mission_id  TEXT    NOT NULL,
      completed_at TEXT   NOT NULL DEFAULT (datetime('now')),
      UNIQUE(user_id, mission_id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  _save();
  return db;
}

module.exports = db;
module.exports.initDb = initDb;
