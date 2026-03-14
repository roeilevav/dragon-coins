// ============================================================
//  CONFIGURATION — set to your Railway URL after deploying
//  Leave empty ('') when the backend also serves the frontend
// ============================================================
const API_BASE = '';

// ============================================================
//  ITEM POOL & MERCHANTS
// ============================================================
const ITEMS = [
  { name: 'rocket',           emoji: '🚀' },
  { name: 'magic carpet',     emoji: '🧞' },
  { name: 'invisible cloak',  emoji: '🧥' },
  { name: 'dinosaur egg',     emoji: '🦕' },
  { name: 'treasure map',     emoji: '🗺️' },
  { name: 'jetpack',          emoji: '🎒' },
  { name: 'time machine',     emoji: '⏰' },
  { name: 'dragon saddle',    emoji: '🐉' },
  { name: 'crystal ball',     emoji: '🔮' },
  { name: 'giant sandwich',   emoji: '🥪' },
  { name: 'cloud shoes',      emoji: '☁️' },
  { name: 'robot butler',     emoji: '🤖' },
  { name: 'moon rock',        emoji: '🌙' },
  { name: 'pirate hat',       emoji: '🏴‍☠️' },
  { name: 'lava lamp',        emoji: '💡' },
  { name: 'rainbow bridge',   emoji: '🌈' },
  { name: 'submarine',        emoji: '🤿' },
  { name: 'enchanted sword',  emoji: '⚔️' },
  { name: 'talking parrot',   emoji: '🦜' },
  { name: 'gold telescope',   emoji: '🔭' },
  { name: 'flying carpet',    emoji: '🪁' },
  { name: 'giant magnet',     emoji: '🧲' },
  { name: 'mystery box',      emoji: '📦' },
  { name: 'ninja stars',      emoji: '⭐' },
  { name: 'hot air balloon',  emoji: '🎈' },
  // --- 30 new items ---
  { name: 'freeze ray',       emoji: '❄️' },
  { name: 'magic wand',       emoji: '🪄' },
  { name: 'enchanted shield', emoji: '🛡️' },
  { name: 'hoverboard',       emoji: '🛹' },
  { name: 'space helmet',     emoji: '🪐' },
  { name: 'magic potion',     emoji: '🧪' },
  { name: 'ancient scroll',   emoji: '📜' },
  { name: 'battle axe',       emoji: '🪓' },
  { name: 'golden compass',   emoji: '🧭' },
  { name: 'ice crown',        emoji: '👑' },
  { name: 'speed boots',      emoji: '👟' },
  { name: 'wizard hat',       emoji: '🎩' },
  { name: 'chaos orb',        emoji: '🌀' },
  { name: 'grappling hook',   emoji: '🪝' },
  { name: 'bubble cannon',    emoji: '🫧' },
  { name: 'gemstone',         emoji: '💎' },
  { name: 'storm lantern',    emoji: '🏮' },
  { name: 'crystal key',      emoji: '🗝️' },
  { name: 'dragon flute',     emoji: '🎶' },
  { name: 'echo horn',        emoji: '📯' },
  { name: 'lava shield',      emoji: '🌋' },
  { name: 'ghost detector',   emoji: '👻' },
  { name: 'sonic goggles',    emoji: '🥽' },
  { name: 'phoenix feather',  emoji: '🪶' },
  { name: 'jungle vine',      emoji: '🌿' },
  { name: 'thunder drum',     emoji: '🥁' },
  { name: 'shadow mask',      emoji: '🎭' },
  { name: 'cosmic cookie',    emoji: '🍪' },
  { name: 'portal stone',     emoji: '🔵' },
  { name: 'stardust bottle',  emoji: '✨' },
];

const MERCHANTS = [
  { name: 'Benny the Bear', emoji: '🐻' },
  { name: 'Fiona the Fox',  emoji: '🦊' },
  { name: 'Gary the Frog',  emoji: '🐸' },
  { name: 'Leo the Lion',   emoji: '🦁' },
  { name: 'Penny the Panda',emoji: '🐼' },
];

// ============================================================
//  CRAFTS
//  requires[] = market items to consume
//  result     = the new rare item created (name + emoji)
// ============================================================
const CRAFTS = [
  {
    id: 'dragon_knight',
    result: { name: 'Dragon Knight Armor', emoji: '🛡️' },
    description: 'Forge the ultimate warrior armor — only a true dragon rider can wear it!',
    requires: ['dragon saddle', 'enchanted sword', 'invisible cloak'],
  },
  {
    id: 'space_station',
    result: { name: 'Space Station', emoji: '🛸' },
    description: 'Assemble a high-tech orbiting base with a view of the whole galaxy!',
    requires: ['rocket', 'robot butler', 'gold telescope'],
  },
  {
    id: 'wizard_tower',
    result: { name: 'Wizard\'s Tower', emoji: '🏰' },
    description: 'Raise a towering fortress of magic and mystery from the clouds!',
    requires: ['crystal ball', 'lava lamp', 'rainbow bridge'],
  },
  {
    id: 'pirate_time_ship',
    result: { name: 'Pirate Time Ship', emoji: '⚓' },
    description: 'Sail the seas of time in a legendary pirate vessel across every era!',
    requires: ['time machine', 'pirate hat', 'hot air balloon'],
  },
  {
    id: 'robo_dragon',
    result: { name: 'Robo Dragon', emoji: '🤖' },
    description: 'Combine robot intelligence and dragon muscle into the ultimate mechanical beast!',
    requires: ['robot butler', 'dragon saddle', 'giant magnet'],
  },
  {
    id: 'treasure_island',
    result: { name: 'Treasure Island', emoji: '🏝️' },
    description: 'Chart the seas, dive deep, and claim your very own island full of riches!',
    requires: ['treasure map', 'submarine', 'gold telescope'],
  },
  {
    id: 'moon_base',
    result: { name: 'Moon Base', emoji: '🌕' },
    description: 'Launch to the moon and build an incredible lunar headquarters up there!',
    requires: ['moon rock', 'rocket', 'robot butler'],
  },
  {
    id: 'sky_palace',
    result: { name: 'Sky Palace', emoji: '🏯' },
    description: 'Float high above the clouds in your own magnificent flying fortress!',
    requires: ['hot air balloon', 'rainbow bridge', 'cloud shoes'],
  },
  {
    id: 'star_compass',
    result: { name: 'Star Compass', emoji: '🌟' },
    description: 'Fuse starlight, steel, and sorcery into a compass that finds any treasure!',
    requires: ['gold telescope', 'ninja stars', 'crystal ball'],
  },
  {
    id: 'dino_racer',
    result: { name: 'Dino Racer', emoji: '🦕' },
    description: 'Hatch your egg, strap on a jetpack, and race a living dinosaur through the sky!',
    requires: ['dinosaur egg', 'jetpack', 'cloud shoes'],
  },
  // --- 30 new crafts ---
  {
    id: 'frost_fortress',
    result: { name: 'Frost Fortress', emoji: '🧊' },
    description: 'Combine ice tech and magnetic power to build an unbreakable frozen stronghold!',
    requires: ['freeze ray', 'bubble cannon', 'giant magnet'],
  },
  {
    id: 'spell_tome',
    result: { name: 'Grand Spell Tome', emoji: '📖' },
    description: 'Bind ancient knowledge and crystal magic into the ultimate book of spells!',
    requires: ['magic wand', 'ancient scroll', 'crystal ball'],
  },
  {
    id: 'shadow_knight',
    result: { name: 'Shadow Knight Armor', emoji: '🗡️' },
    description: 'Forge darkness, steel, and a razor-sharp axe into legendary warrior gear!',
    requires: ['shadow mask', 'enchanted shield', 'battle axe'],
  },
  {
    id: 'turbo_racer',
    result: { name: 'Turbo Racer', emoji: '⚡' },
    description: 'Stack speed boots, a hoverboard, and a jetpack to become the fastest thing alive!',
    requires: ['speed boots', 'hoverboard', 'jetpack'],
  },
  {
    id: 'arctic_suit',
    result: { name: 'Arctic Explorer Suit', emoji: '🏔️' },
    description: 'Layer ice crown, freeze ray, and a space helmet for the ultimate cold-weather gear!',
    requires: ['ice crown', 'freeze ray', 'space helmet'],
  },
  {
    id: 'elixir_of_stars',
    result: { name: 'Elixir of Stars', emoji: '🌠' },
    description: 'Brew a cosmic concoction of magic potion, chaos, and stardust — drink at your own risk!',
    requires: ['magic potion', 'chaos orb', 'stardust bottle'],
  },
  {
    id: 'phoenix_armor',
    result: { name: 'Phoenix Armor', emoji: '🔥' },
    description: 'Fuse a phoenix feather with twin shields to forge armor that rises from any flame!',
    requires: ['phoenix feather', 'enchanted shield', 'lava shield'],
  },
  {
    id: 'jungle_throne',
    result: { name: 'Jungle Throne', emoji: '🌴' },
    description: 'Rule the jungle! Swing in, claim the throne, and let your parrot announce your arrival!',
    requires: ['jungle vine', 'grappling hook', 'talking parrot'],
  },
  {
    id: 'storm_orchestra',
    result: { name: 'Storm Orchestra', emoji: '⛈️' },
    description: 'Drum thunder, echo across mountains, and light the storm lantern for an epic sky concert!',
    requires: ['thunder drum', 'echo horn', 'storm lantern'],
  },
  {
    id: 'cosmic_portal',
    result: { name: 'Cosmic Portal', emoji: '🌌' },
    description: 'Combine a portal stone, stardust, and pure chaos to open a door to another universe!',
    requires: ['portal stone', 'stardust bottle', 'chaos orb'],
  },
  {
    id: 'ancient_observatory',
    result: { name: 'Ancient Observatory', emoji: '🔭' },
    description: 'Unlock forbidden scrolls, find the crystal key, and peer to the edge of the galaxy!',
    requires: ['ancient scroll', 'crystal key', 'gold telescope'],
  },
  {
    id: 'ghost_ship',
    result: { name: 'Ghost Ship', emoji: '👻' },
    description: 'Command a phantom vessel that haunts the deep — half submarine, half nightmare!',
    requires: ['ghost detector', 'submarine', 'pirate hat'],
  },
  {
    id: 'stealth_suit',
    result: { name: 'Stealth Suit', emoji: '🕵️' },
    description: 'Combine goggles, a cloak, and rocket boots to become completely undetectable!',
    requires: ['sonic goggles', 'invisible cloak', 'speed boots'],
  },
  {
    id: 'dragon_orchestra',
    result: { name: 'Dragon Orchestra', emoji: '🎵' },
    description: 'Teach your parrot to play the dragon flute while the echo horn fills the skies with music!',
    requires: ['dragon flute', 'talking parrot', 'echo horn'],
  },
  {
    id: 'royal_navigator',
    result: { name: 'Royal Navigator', emoji: '👑' },
    description: 'An ice crown, a wizard\'s hat, and a golden compass — now YOU rule all the maps!',
    requires: ['ice crown', 'wizard hat', 'golden compass'],
  },
  {
    id: 'enchanted_kitchen',
    result: { name: 'Enchanted Kitchen', emoji: '🍽️' },
    description: 'Let your robot butler cook a giant sandwich and a cosmic cookie using pure kitchen magic!',
    requires: ['giant sandwich', 'cosmic cookie', 'robot butler'],
  },
  {
    id: 'diamond_forge',
    result: { name: 'Diamond Forge', emoji: '💎' },
    description: 'Heat a gemstone with a lava shield and a battle axe to forge the ultimate diamond weapon!',
    requires: ['gemstone', 'battle axe', 'lava shield'],
  },
  {
    id: 'ninja_master_kit',
    result: { name: 'Ninja Master Kit', emoji: '🥷' },
    description: 'Stars, shadow, and sonic goggles: the complete kit of a true ninja grandmaster!',
    requires: ['ninja stars', 'shadow mask', 'sonic goggles'],
  },
  {
    id: 'galactic_atlas',
    result: { name: 'Galactic Atlas', emoji: '🗺️' },
    description: 'Chart every star system with a space helmet, golden compass, and a sprinkle of stardust!',
    requires: ['space helmet', 'golden compass', 'stardust bottle'],
  },
  {
    id: 'crystal_citadel',
    result: { name: 'Crystal Citadel', emoji: '🏰' },
    description: 'Lock a gemstone inside an enchanted shield with the crystal key — instant fortress!',
    requires: ['crystal key', 'gemstone', 'enchanted shield'],
  },
  {
    id: 'time_wizards_robe',
    result: { name: 'Time Wizard\'s Robe', emoji: '⏳' },
    description: 'Travel through time wearing a robe spun from ancient scrolls and a magic wand\'s power!',
    requires: ['time machine', 'magic wand', 'ancient scroll'],
  },
  {
    id: 'deep_sea_lab',
    result: { name: 'Deep Sea Lab', emoji: '🧪' },
    description: 'Detect ghosts, brew potions, and dive deep — science has never been this spooky!',
    requires: ['submarine', 'magic potion', 'ghost detector'],
  },
  {
    id: 'sky_surfer',
    result: { name: 'Sky Surfer', emoji: '🛸' },
    description: 'Ride a flying carpet boosted by a magic wand and a hoverboard — pure sky freedom!',
    requires: ['flying carpet', 'magic wand', 'hoverboard'],
  },
  {
    id: 'dragon_kingdom',
    result: { name: 'Dragon Kingdom', emoji: '🐲' },
    description: 'Build a kingdom across the rainbow bridge with your dragon and its enchanting flute music!',
    requires: ['dragon flute', 'dragon saddle', 'rainbow bridge'],
  },
  {
    id: 'phantom_vault',
    result: { name: 'Phantom Vault', emoji: '📦' },
    description: 'Open the mystery box with a portal stone to reveal a ghost-guarded vault of treasures!',
    requires: ['mystery box', 'portal stone', 'ghost detector'],
  },
  {
    id: 'star_navigator',
    result: { name: 'Star Navigator', emoji: '🚀' },
    description: 'Chart a course through the cosmos with a compass, a space helmet, and a full rocket!',
    requires: ['rocket', 'space helmet', 'golden compass'],
  },
  {
    id: 'pirate_academy',
    result: { name: 'Pirate Academy', emoji: '⚓' },
    description: 'Hook, map, and hat — open a school to train the greatest pirates who ever sailed!',
    requires: ['pirate hat', 'grappling hook', 'treasure map'],
  },
  {
    id: 'magnetic_blizzard',
    result: { name: 'Magnetic Blizzard', emoji: '🌨️' },
    description: 'Combine a giant magnet, thunder drum, and freeze ray to summon the ultimate ice storm!',
    requires: ['giant magnet', 'thunder drum', 'freeze ray'],
  },
  {
    id: 'rainbow_palace',
    result: { name: 'Rainbow Palace', emoji: '🌈' },
    description: 'Raise a shimmering palace at the end of the rainbow, crowned in ice and stardust!',
    requires: ['rainbow bridge', 'ice crown', 'stardust bottle'],
  },
  {
    id: 'moon_crystal',
    result: { name: 'Moon Crystal', emoji: '🌙' },
    description: 'Lock moon rock energy inside a crystal key using a chaos orb — pure lunar magic!',
    requires: ['moon rock', 'crystal key', 'chaos orb'],
  },
];

// ============================================================
//  QUIZ QUESTIONS
//  correct = index of the right answer in options[]
// ============================================================
const QUIZ_QUESTIONS = [
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

// ============================================================
//  STATE
// ============================================================
let currentUser    = null;
let countdownInterval = null;
let pendingPurchase = null; // set when quiz opens

// ============================================================
//  DOM HELPERS
// ============================================================
function $(id) { return document.getElementById(id); }

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(`screen-${name}`).classList.add('active');
}

function showToast(msg, isError = false) {
  const toast = $('toast');
  toast.textContent = msg;
  toast.style.background = isError ? '#EF4444' : '#10B981';
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function itemEmoji(name) {
  return (ITEMS.find(i => i.name === name) || { emoji: '📦' }).emoji;
}

// ============================================================
//  BALANCES
// ============================================================
function updateBalances() {
  const label  = `🪙 ${currentUser.coins}`;
  const uLabel = `👤 ${currentUser.username}`;
  ['roll-balance', 'market-balance', 'inv-balance', 'lb-balance', 'craft-balance', 'create-balance']
    .forEach(id => { const el = $(id); if (el) el.textContent = label; });
  ['roll-username', 'market-username', 'inv-username', 'lb-username', 'craft-username', 'create-username']
    .forEach(id => { const el = $(id); if (el) el.textContent = uLabel; });
}

// ============================================================
//  API
// ============================================================
async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return { status: res.status, data: await res.json() };
}

async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`);
  return { status: res.status, data: await res.json() };
}

// ============================================================
//  LOGIN
// ============================================================
async function handleLogin(e) {
  e.preventDefault();
  const input = $('username-input');
  const errEl = $('login-error');
  const username = input.value.trim();
  errEl.classList.add('hidden');

  if (!/^[a-zA-Z0-9]{1,10}$/.test(username)) {
    errEl.textContent = 'Use 1–10 letters and numbers only, no spaces 🐉';
    errEl.classList.remove('hidden');
    return;
  }

  try {
    const { status, data } = await apiPost('/users/login', { username });
    if (status === 400) { errEl.textContent = 'That name is taken! Try another one 🐉'; errEl.classList.remove('hidden'); return; }
    if (status !== 200 && status !== 201) { errEl.textContent = 'Something went wrong. Try again!'; errEl.classList.remove('hidden'); return; }

    currentUser = data.user;
    sessionStorage.setItem('dragonUsername', username);
    goToRollScreen();
  } catch (err) {
    errEl.textContent = 'Could not reach the server. Is the backend running?';
    errEl.classList.remove('hidden');
  }
}

// ============================================================
//  ROLL SCREEN
// ============================================================
function goToRollScreen() {
  updateBalances();
  renderRollState();
  showScreen('roll');
}

function renderRollState() {
  const btn            = $('roll-btn');
  const cooldownDisplay = $('cooldown-display');
  const marketBtn       = $('go-market-btn');

  if (currentUser.last_roll_at) marketBtn.classList.remove('hidden');

  if (currentUser.last_roll_at) {
    const lastRoll  = new Date(currentUser.last_roll_at).getTime();
    const remaining = 20 * 1000 - (Date.now() - lastRoll);
    if (remaining > 0) {
      btn.disabled = true;
      cooldownDisplay.classList.remove('hidden');
      startCountdown(remaining);
      return;
    }
  }

  btn.disabled = false;
  cooldownDisplay.classList.add('hidden');
  clearInterval(countdownInterval);
}

function startCountdown(remainingMs) {
  clearInterval(countdownInterval);
  renderCountdown(remainingMs);
  const end = Date.now() + remainingMs;
  countdownInterval = setInterval(() => {
    const left = end - Date.now();
    if (left <= 0) {
      clearInterval(countdownInterval);
      $('roll-btn').disabled = false;
      $('cooldown-display').classList.add('hidden');
      $('roll-result').classList.add('hidden');
    } else {
      renderCountdown(left);
    }
  }, 1000);
}

function renderCountdown(ms) {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  $('cooldown-timer').textContent =
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

async function handleRoll() {
  const btn = $('roll-btn');
  btn.disabled = true;

  try {
    const { status, data } = await apiPost(`/users/${currentUser.id}/roll`, {});
    if (status === 429) {
      currentUser.last_roll_at = new Date(Date.now() - (20 * 1000 - data.remaining_ms)).toISOString();
      startCountdown(data.remaining_ms);
      $('cooldown-display').classList.remove('hidden');
      return;
    }
    if (status !== 200) { showToast('Something went wrong. Try again!', true); btn.disabled = false; return; }

    currentUser = data.user;
    updateBalances();
    $('roll-result').textContent = `You got ${data.earned} Dragon Coins! 🎉`;
    $('roll-result').classList.remove('hidden');
    $('go-market-btn').classList.remove('hidden');
    startCountdown(20 * 1000);
    $('cooldown-display').classList.remove('hidden');
  } catch (err) {
    showToast('Could not reach server!', true);
    btn.disabled = false;
  }
}

// ============================================================
//  QUIZ MODAL
// ============================================================
function showQuizModal(purchase) {
  // purchase = { type:'merchant'|'listing', itemName, merchantName, basePrice, listingId, btn }
  pendingPurchase = purchase;

  const q = QUIZ_QUESTIONS[Math.floor(Math.random() * QUIZ_QUESTIONS.length)];

  $('quiz-question').textContent = q.q;
  $('quiz-result').classList.add('hidden');

  const optsEl = $('quiz-options');
  optsEl.dataset.correct = q.correct;
  optsEl.innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-opt-btn" data-index="${i}" data-correct="${i === q.correct}">${opt}</button>`
  ).join('');

  $('quiz-modal').classList.remove('hidden');
}

function handleQuizAnswer(e) {
  const btn = e.target.closest('.quiz-opt-btn');
  if (!btn) return;

  const isCorrect  = btn.dataset.correct === 'true';
  const correctIdx = parseInt($('quiz-options').dataset.correct, 10);

  // Highlight all options
  document.querySelectorAll('.quiz-opt-btn').forEach(b => {
    b.disabled = true;
    const idx = parseInt(b.dataset.index, 10);
    if (idx === correctIdx)    b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  const basePrice  = pendingPurchase.basePrice;
  const finalPrice = isCorrect ? Math.round(basePrice * 0.6) : basePrice;
  pendingPurchase.finalPrice  = finalPrice;
  pendingPurchase.quizCorrect = isCorrect;

  // Result message
  const msg = $('quiz-result-msg');
  msg.textContent = isCorrect ? '🎉 Correct! You get 40% off!' : '❌ Wrong! You pay full price.';
  msg.style.color = isCorrect ? 'var(--green-dk)' : 'var(--red)';

  // Price display
  const priceEl = $('quiz-price-display');
  priceEl.innerHTML = isCorrect
    ? `<s>🪙 ${basePrice}</s> → <strong style="color:var(--green-dk)">🪙 ${finalPrice}</strong>`
    : `Price: 🪙 ${finalPrice}`;

  // Confirm button
  const canAfford    = currentUser.coins >= finalPrice;
  const confirmBtn   = $('quiz-confirm-btn');
  confirmBtn.textContent = canAfford ? `Buy for 🪙 ${finalPrice} ✨` : `Not enough coins 💸`;
  confirmBtn.disabled    = !canAfford;

  $('quiz-result').classList.remove('hidden');
}

async function confirmQuizPurchase() {
  const { type, itemName, merchantName, listingId, finalPrice, quizCorrect, btn } = pendingPurchase;
  const confirmBtn = $('quiz-confirm-btn');
  confirmBtn.disabled = true;

  try {
    let status, data;

    if (type === 'merchant') {
      ({ status, data } = await apiPost(`/users/${currentUser.id}/buy`, {
        item_name:     itemName,
        merchant_name: merchantName,
        price:         finalPrice,
      }));
    } else {
      // Player listing — backend applies the discount via quiz_correct flag
      ({ status, data } = await apiPost(`/listings/${listingId}/buy`, {
        buyer_id:    currentUser.id,
        quiz_correct: quizCorrect,
      }));
    }

    if (status === 402) { showToast('Not enough coins! 💸', true); closeQuizModal(); return; }
    if (status === 404) { showToast('Item already sold! 😅', true); closeQuizModal(); renderPlayerListings(); return; }
    if (status !== 200) { showToast('Purchase failed. Try again!', true); closeQuizModal(); return; }

    currentUser = data.user;
    updateBalances();
    showToast(`Bought ${itemName}! 🎉`);
    closeQuizModal();
    setTimeout(() => { renderMarket(); renderPlayerListings(); }, 300);

  } catch (err) {
    showToast('Could not reach server!', true);
    closeQuizModal();
  }
}

function closeQuizModal() {
  $('quiz-modal').classList.add('hidden');
  if (pendingPurchase?.btn) pendingPurchase.btn.disabled = false;
  pendingPurchase = null;
}

// ============================================================
//  MARKET SCREEN
// ============================================================
function goToMarketScreen() {
  updateBalances();
  renderMarket();
  renderPlayerListings();
  showScreen('market');
}

function shuffleItems() {
  const pool = [...ITEMS];
  const picked = [];
  while (picked.length < MERCHANTS.length) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

function renderMarket() {
  const grid = $('merchant-grid');
  grid.innerHTML = '';
  const selectedItems = shuffleItems();

  MERCHANTS.forEach((merchant, i) => {
    const item      = selectedItems[i];
    const price     = Math.floor(Math.random() * 71) + 10; // 10–80
    const canAfford = currentUser.coins >= price;

    const card = document.createElement('div');
    card.className = 'merchant-card';
    card.innerHTML = `
      <div class="merchant-avatar">${merchant.emoji}</div>
      <div class="merchant-name">${merchant.name}</div>
      <div class="item-emoji">${item.emoji}</div>
      <div class="item-name">${item.name}</div>
      <div class="item-price">🪙 ${price}</div>
      <button class="btn btn-green buy-btn" ${canAfford ? '' : 'disabled'}
        data-item="${item.name}" data-merchant="${merchant.name}" data-price="${price}">
        ${canAfford ? 'Buy ✨' : 'Too expensive 💸'}
      </button>
    `;
    grid.appendChild(card);
  });
}

function handleBuy(e) {
  const btn = e.target.closest('.buy-btn');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  const { item: itemName, merchant: merchantName, price } = btn.dataset;
  showQuizModal({ type: 'merchant', itemName, merchantName, basePrice: Number(price), btn });
}

async function renderPlayerListings() {
  const section = $('player-listings-section');
  const grid    = $('player-listings-grid');

  try {
    const { status, data } = await apiGet('/listings');
    if (status !== 200 || data.listings.length === 0) { section.classList.add('hidden'); return; }

    section.classList.remove('hidden');
    grid.innerHTML = data.listings.map(listing => {
      const emoji     = itemEmoji(listing.item_name);
      const isOwn     = listing.user_id === currentUser.id;
      const canAfford = !isOwn && currentUser.coins >= listing.listed_price;
      return `
        <div class="merchant-card player-listing-card">
          <div class="merchant-avatar">${emoji}</div>
          <div class="merchant-name">👤 ${listing.seller_username}</div>
          <div class="item-name">${listing.item_name}</div>
          <div class="item-price">🪙 ${listing.listed_price}</div>
          <button class="btn buy-listing-btn ${canAfford ? 'btn-green' : ''}"
            ${isOwn || !canAfford ? 'disabled' : ''}
            data-listing-id="${listing.id}"
            data-item="${listing.item_name}"
            data-price="${listing.listed_price}">
            ${isOwn ? 'Your listing 🏷️' : canAfford ? 'Buy ✨' : 'Too expensive 💸'}
          </button>
        </div>
      `;
    }).join('');
  } catch (err) {
    section.classList.add('hidden');
  }
}

function handleBuyListing(e) {
  const btn = e.target.closest('.buy-listing-btn');
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  const { listingId, item: itemName, price } = btn.dataset;
  showQuizModal({ type: 'listing', itemName, basePrice: Number(price), listingId, btn });
}

// ============================================================
//  INVENTORY SCREEN
// ============================================================
async function goToInventoryScreen() {
  updateBalances();
  showScreen('inventory');

  const grid = $('inventory-grid');
  grid.innerHTML = '<p class="empty-state">Loading... ⏳</p>';

  try {
    const { status, data } = await apiGet(`/users/${currentUser.id}/inventory`);
    if (status !== 200) { grid.innerHTML = '<p class="empty-state">Error loading inventory 😢</p>'; return; }

    const items = data.items;
    const marketItems  = items.filter(i => !i.is_crafted && !i.is_custom);
    const craftedItems = items.filter(i =>  i.is_crafted && !i.is_custom);
    const customItems  = items.filter(i =>  i.is_custom);

    if (items.length === 0) { grid.innerHTML = '<p class="empty-state">No items yet — head to the Market! 🛒</p>'; return; }

    function renderCustomCard(item) {
      const dateStr = new Date(item.bought_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
      const isListed = item.listed_price != null;

      const sellSection = isListed ? `
        <div class="listed-badge">Listed for 🪙 ${item.listed_price}</div>
        <button class="btn btn-small unlist-btn" data-item-id="${item.id}">Unlist ❌</button>
      ` : `
        <button class="btn btn-small btn-gold sell-toggle-btn" data-item-id="${item.id}">Sell 💰</button>
        <div class="sell-form hidden" id="sell-form-${item.id}">
          <input type="number" class="price-input" id="price-input-${item.id}"
                 min="1" max="999" placeholder="Set price (1–999)" />
          <div class="sell-form-actions">
            <button class="btn btn-small btn-green list-btn" data-item-id="${item.id}">List ✅</button>
            <button class="btn btn-small cancel-sell-btn" data-item-id="${item.id}">Cancel</button>
          </div>
        </div>
      `;

      return `
        <div class="inv-card custom-card">
          <div class="custom-badge-top">🎨 Custom</div>
          ${item.item_image ? `<img class="custom-item-img" src="${item.item_image}" alt="${item.item_name}" />` : '<div class="custom-item-img-placeholder">🖼️</div>'}
          <div class="inv-item-name">${item.item_name}</div>
          <div class="inv-merchant-name">By ${item.creator_name || 'Unknown'}</div>
          <div class="inv-date">Created ${dateStr}</div>
          ${sellSection}
        </div>
      `;
    }

    function renderMarketCard(item) {
      const emoji    = itemEmoji(item.item_name);
      const dateStr  = new Date(item.bought_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
      const isListed = item.listed_price != null;

      const sellSection = isListed ? `
        <div class="listed-badge">Listed for 🪙 ${item.listed_price}</div>
        <button class="btn btn-small unlist-btn" data-item-id="${item.id}">Unlist ❌</button>
      ` : `
        <button class="btn btn-small btn-gold sell-toggle-btn" data-item-id="${item.id}">Sell 💰</button>
        <div class="sell-form hidden" id="sell-form-${item.id}">
          <input type="number" class="price-input" id="price-input-${item.id}"
                 min="1" max="999" placeholder="Set price (1–999)" />
          <div class="sell-form-actions">
            <button class="btn btn-small btn-green list-btn" data-item-id="${item.id}">List ✅</button>
            <button class="btn btn-small cancel-sell-btn" data-item-id="${item.id}">Cancel</button>
          </div>
        </div>
      `;

      return `
        <div class="inv-card">
          <div class="item-emoji" style="font-size:2rem">${emoji}</div>
          <div class="inv-item-name">${item.item_name}</div>
          <div class="inv-merchant-name">From ${item.merchant_name}</div>
          <div class="inv-price">🪙 ${item.price_paid} coins</div>
          <div class="inv-date">Bought ${dateStr}</div>
          ${sellSection}
        </div>
      `;
    }

    function renderCraftedCard(item) {
      const craft   = CRAFTS.find(c => c.result.name === item.item_name);
      const emoji   = craft ? craft.result.emoji : '✨';
      const dateStr = new Date(item.bought_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

      return `
        <div class="inv-card crafted-card">
          <div class="crafted-badge-top">✨ Crafted</div>
          <div class="item-emoji" style="font-size:2rem">${emoji}</div>
          <div class="inv-item-name">${item.item_name}</div>
          <div class="inv-merchant-name">Forged on ${dateStr}</div>
        </div>
      `;
    }

    let html = '';
    if (marketItems.length > 0) {
      html += `<div class="inv-section-title">🛍️ Market Items</div>`;
      html += `<div class="inv-section-grid">${marketItems.map(renderMarketCard).join('')}</div>`;
    }
    if (craftedItems.length > 0) {
      html += `<div class="inv-section-title crafted-section-title">✨ Crafted Items</div>`;
      html += `<div class="inv-section-grid">${craftedItems.map(renderCraftedCard).join('')}</div>`;
    }
    if (customItems.length > 0) {
      html += `<div class="inv-section-title custom-section-title">🎨 Custom Items</div>`;
      html += `<div class="inv-section-grid">${customItems.map(renderCustomCard).join('')}</div>`;
    }
    if (marketItems.length === 0 && craftedItems.length === 0 && customItems.length === 0) {
      html = '<p class="empty-state">No items yet — head to the Market! 🛒</p>';
    }
    grid.innerHTML = html;
  } catch (err) {
    grid.innerHTML = '<p class="empty-state">Could not reach server 😢</p>';
  }
}

async function handleInventoryClick(e) {
  const sellToggle = e.target.closest('.sell-toggle-btn');
  const cancelBtn  = e.target.closest('.cancel-sell-btn');
  const listBtn    = e.target.closest('.list-btn');
  const unlistBtn  = e.target.closest('.unlist-btn');

  if (sellToggle) { $(`sell-form-${sellToggle.dataset.itemId}`).classList.toggle('hidden'); return; }
  if (cancelBtn)  { $(`sell-form-${cancelBtn.dataset.itemId}`).classList.add('hidden');    return; }

  if (listBtn) {
    const itemId   = listBtn.dataset.itemId;
    const priceVal = parseInt($(`price-input-${itemId}`).value, 10);
    if (!priceVal || priceVal < 1 || priceVal > 999) { showToast('Enter a price between 1 and 999 🪙', true); return; }
    listBtn.disabled = true;
    try {
      const { status } = await apiPost(`/users/${currentUser.id}/inventory/${itemId}/list`, { price: priceVal });
      if (status !== 200) { showToast('Could not list item. Try again!', true); listBtn.disabled = false; return; }
      showToast('Item listed for sale! 🏪');
      await goToInventoryScreen();
    } catch (err) { showToast('Could not reach server!', true); listBtn.disabled = false; }
    return;
  }

  if (unlistBtn) {
    const itemId = unlistBtn.dataset.itemId;
    unlistBtn.disabled = true;
    try {
      const { status } = await apiPost(`/users/${currentUser.id}/inventory/${itemId}/unlist`, {});
      if (status !== 200) { showToast('Could not unlist. Try again!', true); unlistBtn.disabled = false; return; }
      showToast('Listing removed.');
      await goToInventoryScreen();
    } catch (err) { showToast('Could not reach server!', true); unlistBtn.disabled = false; }
    return;
  }
}

// ============================================================
//  LEADERBOARD SCREEN
// ============================================================
async function goToLeaderboardScreen() {
  updateBalances();
  showScreen('leaderboard');
  const table = $('leaderboard-table');
  table.innerHTML = '<p class="empty-state">Loading... ⏳</p>';

  try {
    const { status, data } = await apiGet('/leaderboard');
    if (status !== 200) { table.innerHTML = '<p class="empty-state">Error loading leaderboard 😢</p>'; return; }
    const rows = data.leaderboard;
    if (rows.length === 0) { table.innerHTML = '<p class="empty-state">No players yet — be the first! 🐉</p>'; return; }

    const rankEmoji = ['🥇', '🥈', '🥉'];
    const rankClass = ['gold', 'silver', 'bronze'];
    table.innerHTML = rows.map((row, i) => {
      const isMe = row.username === currentUser.username;
      return `
        <div class="lb-row ${isMe ? 'is-me' : ''}">
          <span class="lb-rank ${rankClass[i] || ''}">${rankEmoji[i] || `#${i + 1}`}</span>
          <span class="lb-username">${row.username}</span>
          ${isMe ? '<span class="lb-you-badge">You!</span>' : ''}
          <span class="lb-coins">🪙 ${row.coins}</span>
        </div>
      `;
    }).join('');
  } catch (err) {
    table.innerHTML = '<p class="empty-state">Could not reach server 😢</p>';
  }
}

// ============================================================
//  CRAFT SCREEN
// ============================================================
async function goToCraftScreen() {
  updateBalances();
  showScreen('craft');

  const grid = $('craft-grid');
  grid.innerHTML = '<p class="empty-state">Loading... ⏳</p>';

  try {
    // Fetch inventory — only non-listed, non-crafted market items count as ingredients
    const invRes = await apiGet(`/users/${currentUser.id}/inventory`);
    if (invRes.status !== 200) { grid.innerHTML = '<p class="empty-state">Error loading inventory 😢</p>'; return; }
    const ownedItems = invRes.data.items
      .filter(i => i.listed_price == null && !i.is_crafted)
      .map(i => i.item_name);

    // Show ALL recipes — locked or unlocked based on owned items
    grid.innerHTML = CRAFTS.map(c => {
      const canCraft = c.requires.every(req => ownedItems.includes(req));

      const ingBadges = c.requires.map(req => {
        const have = ownedItems.includes(req);
        return `<span class="craft-ing-badge ${have ? 'have' : 'need'}">
                  ${have ? '✅' : '❌'} ${itemEmoji(req)} ${req}
                </span>`;
      }).join('');

      return `
        <div class="craft-card ${canCraft ? 'craftable' : 'locked'}">
          <div class="craft-result">
            <span class="craft-result-emoji">${c.result.emoji}</span>
            <div class="craft-result-info">
              <h3 class="craft-result-name">${c.result.name}</h3>
              <p class="craft-result-desc">${c.description}</p>
            </div>
          </div>
          <div class="craft-ingredients">
            <span class="craft-ing-label">Ingredients:</span>
            <div class="craft-ing-badges">${ingBadges}</div>
          </div>
          <button
            class="btn craft-btn ${canCraft ? 'btn-gold' : 'btn-locked'}"
            data-craft-id="${c.id}"
            ${canCraft ? '' : 'disabled'}
          >
            ${canCraft ? '🔨 Craft!' : '🔒 Collect ingredients first'}
          </button>
        </div>
      `;
    }).join('');
  } catch (err) {
    grid.innerHTML = '<p class="empty-state">Could not reach server 😢</p>';
  }
}

async function handleCraft(e) {
  const btn = e.target.closest('.craft-btn');
  if (!btn || btn.disabled) return;

  const craftId = btn.dataset.craftId;
  const craft   = CRAFTS.find(c => c.id === craftId);
  if (!craft) return;

  btn.disabled = true;
  btn.textContent = '⚗️ Crafting…';

  try {
    const { status, data } = await apiPost('/craft/make', {
      user_id:        currentUser.id,
      craft_id:       craftId,
      craft_name:     craft.result.name,
      craft_emoji:    craft.result.emoji,
      required_items: craft.requires,
    });

    if (status === 200) {
      currentUser = data.user;
      updateBalances();
      showToast(`✨ Crafted: ${craft.result.emoji} ${craft.result.name}! Check your Inventory.`);
      await goToCraftScreen();
    } else {
      showToast(data.error || 'Crafting failed!', true);
      await goToCraftScreen();
    }
  } catch (err) {
    showToast('Could not reach server 😢', true);
    btn.disabled = false;
    btn.textContent = '🔨 Craft!';
  }
}

// ============================================================
//  CREATE SCREEN
// ============================================================
const SACRIFICE_REQUIRED = 5;
let createSelectedIds   = new Set(); // IDs of chosen crafted items
let createImageDataUrl  = null;

function resizeImageToDataUrl(file, maxPx = 600) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = ev => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxPx / Math.max(img.width, img.height));
        const w = Math.round(img.width  * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width  = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function updateCreateSubmitState() {
  const name    = $('create-item-name').value.trim();
  const creator = $('create-creator-name').value.trim();
  const ready   = createSelectedIds.size === SACRIFICE_REQUIRED && name && creator && createImageDataUrl;
  const btn     = $('create-submit-btn');
  const hint    = $('create-submit-hint');
  btn.disabled  = !ready;

  if (ready) {
    hint.textContent = '✅ Ready to forge!';
    hint.style.color = '#059669';
  } else {
    const missing = [];
    if (createSelectedIds.size < SACRIFICE_REQUIRED) missing.push(`select ${SACRIFICE_REQUIRED - createSelectedIds.size} more item(s)`);
    if (!createImageDataUrl) missing.push('upload an image');
    if (!name)    missing.push('add an item name');
    if (!creator) missing.push('add creator name');
    hint.textContent = `Still needed: ${missing.join(', ')}`;
    hint.style.color = '#6B7280';
  }
}

async function goToCreateScreen() {
  updateBalances();
  showScreen('create');
  $('create-date-display').textContent = new Date().toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  // Reset state
  createSelectedIds  = new Set();
  createImageDataUrl = null;
  $('create-selected-count').textContent = '0';
  $('create-item-name').value    = '';
  $('create-creator-name').value = '';
  $('create-img-preview').classList.add('hidden');
  $('create-img-placeholder').classList.remove('hidden');
  $('create-img-input').value = '';
  updateCreateSubmitState();

  const grid   = $('create-sacrifice-grid');
  const locked = $('create-locked');
  const form   = $('create-form-wrap');
  grid.innerHTML = '<p class="empty-state">Loading... ⏳</p>';

  try {
    const { status, data } = await apiGet(`/users/${currentUser.id}/inventory`);
    if (status !== 200) { grid.innerHTML = '<p class="empty-state">Error loading inventory 😢</p>'; return; }

    const craftedItems = data.items.filter(i => i.is_crafted && !i.listed_price);
    $('create-crafted-count').textContent = craftedItems.length;

    if (craftedItems.length < SACRIFICE_REQUIRED) {
      locked.classList.remove('hidden');
      form.classList.add('hidden');
      grid.innerHTML = '';
      return;
    }

    locked.classList.add('hidden');
    form.classList.remove('hidden');

    grid.innerHTML = craftedItems.map(item => {
      const craft = CRAFTS.find(c => c.result.name === item.item_name);
      const emoji = craft ? craft.result.emoji : '✨';
      return `
        <div class="sacrifice-card" data-item-id="${item.id}">
          <div class="sacrifice-emoji">${emoji}</div>
          <div class="sacrifice-name">${item.item_name}</div>
          <div class="sacrifice-check">☐</div>
        </div>
      `;
    }).join('');
  } catch (err) {
    grid.innerHTML = '<p class="empty-state">Could not reach server 😢</p>';
  }
}

function handleSacrificeToggle(e) {
  const card = e.target.closest('.sacrifice-card');
  if (!card) return;
  const id = Number(card.dataset.itemId);

  if (createSelectedIds.has(id)) {
    createSelectedIds.delete(id);
    card.classList.remove('selected');
    card.querySelector('.sacrifice-check').textContent = '☐';
  } else {
    if (createSelectedIds.size >= SACRIFICE_REQUIRED) {
      showToast(`You can only select ${SACRIFICE_REQUIRED} items`, true);
      return;
    }
    createSelectedIds.add(id);
    card.classList.add('selected');
    card.querySelector('.sacrifice-check').textContent = '✅';
  }

  $('create-selected-count').textContent = createSelectedIds.size;
  updateCreateSubmitState();
}

async function handleCreateImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  try {
    createImageDataUrl = await resizeImageToDataUrl(file);
    $('create-img-preview').src = createImageDataUrl;
    $('create-img-preview').classList.remove('hidden');
    $('create-img-placeholder').classList.add('hidden');
    updateCreateSubmitState();
  } catch (err) {
    showToast('Could not load image. Try another file.', true);
  }
}

async function handleCreateSubmit() {
  const name    = $('create-item-name').value.trim();
  const creator = $('create-creator-name').value.trim();

  if (createSelectedIds.size !== SACRIFICE_REQUIRED || !name || !creator || !createImageDataUrl) return;

  const btn = $('create-submit-btn');
  btn.disabled = true;
  btn.textContent = '⚗️ Forging…';

  try {
    const { status, data } = await apiPost('/custom/create', {
      user_id:       currentUser.id,
      item_name:     name,
      creator_name:  creator,
      item_image:    createImageDataUrl,
      sacrifice_ids: [...createSelectedIds],
    });

    if (status === 200) {
      currentUser = data.user;
      updateBalances();
      showToast(`🎨 "${name}" has been forged! Find it in your Inventory.`);
      await goToCreateScreen(); // reset the screen
    } else {
      showToast(data.error || 'Creation failed!', true);
      btn.disabled = false;
      btn.textContent = '🎨 Forge Item';
    }
  } catch (err) {
    showToast('Could not reach server 😢', true);
    btn.disabled = false;
    btn.textContent = '🎨 Forge Item';
  }
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
function handleLogout() {
  sessionStorage.removeItem('dragonUsername');
  currentUser = null;
  clearInterval(countdownInterval);
  countdownInterval = null;
  $('username-input').value = '';
  showScreen('login');
}

function attachListeners() {
  $('login-form').addEventListener('submit', handleLogin);
  $('roll-btn').addEventListener('click', handleRoll);

  // Logout buttons (one per screen, use class delegation on document)
  document.addEventListener('click', e => {
    if (e.target.closest('.logout-btn')) handleLogout();
  });
  $('go-market-btn').addEventListener('click', goToMarketScreen);

  // Quiz modal
  $('quiz-options').addEventListener('click', handleQuizAnswer);
  $('quiz-confirm-btn').addEventListener('click', confirmQuizPurchase);
  $('quiz-cancel-btn').addEventListener('click', closeQuizModal);

  // Market — delegated on the persistent grid wrappers
  $('merchant-grid').addEventListener('click', handleBuy);
  $('player-listings-grid').addEventListener('click', handleBuyListing);

  // Inventory sell/list/unlist
  $('inventory-grid').addEventListener('click', handleInventoryClick);

  // Nav — Roll screen
  $('nav-craft-from-roll').addEventListener('click', e => { e.preventDefault(); goToCraftScreen(); });

  // Nav — Market
  $('nav-roll-from-market').addEventListener('click', e => { e.preventDefault(); goToRollScreen(); });
  $('nav-inventory').addEventListener('click', e => { e.preventDefault(); goToInventoryScreen(); });
  $('nav-leaderboard').addEventListener('click', e => { e.preventDefault(); goToLeaderboardScreen(); });
  $('nav-craft-from-market').addEventListener('click', e => { e.preventDefault(); goToCraftScreen(); });

  // Nav — Inventory
  $('nav-roll-from-inv').addEventListener('click', e => { e.preventDefault(); goToRollScreen(); });
  $('nav-market-from-inv').addEventListener('click', e => { e.preventDefault(); goToMarketScreen(); });
  $('nav-leaderboard-from-inv').addEventListener('click', e => { e.preventDefault(); goToLeaderboardScreen(); });
  $('nav-craft-from-inv').addEventListener('click', e => { e.preventDefault(); goToCraftScreen(); });

  // Nav — Leaderboard
  $('nav-roll-from-lb').addEventListener('click', e => { e.preventDefault(); goToRollScreen(); });
  $('nav-market-from-lb').addEventListener('click', e => { e.preventDefault(); goToMarketScreen(); });
  $('nav-inventory-from-lb').addEventListener('click', e => { e.preventDefault(); goToInventoryScreen(); });
  $('nav-craft-from-lb').addEventListener('click', e => { e.preventDefault(); goToCraftScreen(); });

  // Nav — Craft
  $('nav-roll-from-craft').addEventListener('click', e => { e.preventDefault(); goToRollScreen(); });
  $('nav-market-from-craft').addEventListener('click', e => { e.preventDefault(); goToMarketScreen(); });
  $('nav-inventory-from-craft').addEventListener('click', e => { e.preventDefault(); goToInventoryScreen(); });
  $('nav-leaderboard-from-craft').addEventListener('click', e => { e.preventDefault(); goToLeaderboardScreen(); });
  $('nav-create-from-craft').addEventListener('click', e => { e.preventDefault(); goToCreateScreen(); });

  // Nav — Create (from all other screens)
  $('nav-create-from-roll').addEventListener('click', e => { e.preventDefault(); goToCreateScreen(); });
  $('nav-create-from-market').addEventListener('click', e => { e.preventDefault(); goToCreateScreen(); });
  $('nav-create-from-inv').addEventListener('click', e => { e.preventDefault(); goToCreateScreen(); });
  $('nav-create-from-lb').addEventListener('click', e => { e.preventDefault(); goToCreateScreen(); });

  // Nav — from Create screen to everywhere
  $('nav-roll-from-create').addEventListener('click', e => { e.preventDefault(); goToRollScreen(); });
  $('nav-market-from-create').addEventListener('click', e => { e.preventDefault(); goToMarketScreen(); });
  $('nav-inventory-from-create').addEventListener('click', e => { e.preventDefault(); goToInventoryScreen(); });
  $('nav-leaderboard-from-create').addEventListener('click', e => { e.preventDefault(); goToLeaderboardScreen(); });
  $('nav-craft-from-create').addEventListener('click', e => { e.preventDefault(); goToCraftScreen(); });

  // Craft grid — craft button
  $('craft-grid').addEventListener('click', handleCraft);

  // Create screen
  $('create-sacrifice-grid').addEventListener('click', handleSacrificeToggle);
  $('create-img-input').addEventListener('change', handleCreateImageUpload);
  $('create-image-area').addEventListener('click', () => $('create-img-input').click());
  $('create-item-name').addEventListener('input', updateCreateSubmitState);
  $('create-creator-name').addEventListener('input', updateCreateSubmitState);
  $('create-submit-btn').addEventListener('click', handleCreateSubmit);
}

// ============================================================
//  BOOT
// ============================================================
async function boot() {
  attachListeners();

  const savedUsername = sessionStorage.getItem('dragonUsername');
  if (savedUsername) {
    try {
      const { status, data } = await apiPost('/users/login', { username: savedUsername });
      if (status === 200 || status === 201) {
        currentUser = data.user;
        goToRollScreen();
        return;
      }
    } catch (err) { /* fall through */ }
  }

  showScreen('login');
}

boot();
