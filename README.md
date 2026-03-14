# 🐉 Dragon Coins

A browser game for kids aged 10–12. Collect Dragon Coins by rolling, visit animal merchants to buy items, and compete on the leaderboard!

---

## Project Structure

```
dragon game/
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── routes/
│   │   ├── users.js
│   │   └── leaderboard.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js         ← API_BASE URL is at the top of this file
└── README.md
```

---

## Running Locally

### 1. Start the backend

```bash
cd backend
npm install
npm start
```

The server runs on **http://localhost:3000**.

### 2. Open the frontend

Open `frontend/index.html` directly in your browser (double-click it), or serve it with any static file server:

```bash
npx serve frontend
# or
python3 -m http.server 8080 --directory frontend
```

---

## Deploying to Railway (Backend)

1. Create a free account at [railway.app](https://railway.app)
2. Click **New Project → Deploy from GitHub repo** and connect this repo
3. Set the **Root Directory** to `backend`
4. Railway auto-detects Node.js and runs `npm start`
5. After deploy, copy your Railway public URL (e.g. `https://dragon-coins.up.railway.app`)
6. Open `frontend/app.js` and update the very first line:

```js
const API_BASE = 'https://dragon-coins.up.railway.app';
```

**Environment variables** (set in Railway dashboard → Variables):
| Variable | Value |
|----------|-------|
| `PORT`   | Railway sets this automatically — no action needed |

The SQLite database file (`dragon_coins.db`) is created automatically on first run inside the `backend/` directory. Railway persists it between deploys as long as you don't clear the volume.

---

## Deploying to GitHub Pages (Frontend)

1. Push the whole project to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **branch: main**, **folder: /frontend**, then click **Save**
5. Your game will be live at `https://<your-username>.github.io/<repo-name>/`

> **Important:** Update `API_BASE` in `frontend/app.js` to your Railway URL *before* pushing to GitHub.

---

## API Reference

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | `/users/login`        | Create or fetch user by username     |
| POST   | `/users/:id/roll`     | Award 10–100 coins (30 min cooldown) |
| GET    | `/users/:id/inventory`| Get all purchased items              |
| POST   | `/users/:id/buy`      | Buy an item, deduct coins            |
| GET    | `/leaderboard`        | Top 10 users by coin balance         |

---

## Tech Stack

- **Backend:** Node.js + Express + sql.js (SQLite via WebAssembly — no native bindings)
- **Frontend:** Pure HTML, CSS, JavaScript — no frameworks
- **Font:** Nunito (Google Fonts)
