const express = require('express');
const crypto  = require('crypto');
const router  = express.Router();
const db      = require('../database');

const USERNAME_REGEX = /^[a-zA-Z0-9]{1,10}$/;
const COOLDOWN_MS    = 60 * 1000; // 1 minute
const ROLL_COST      = 5;

// ---- Quiz questions (server-side so answers can't be cheated) ----
const QUIZ_POOL = [
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
  // --- 100 new questions ---
  // MATH
  { q: 'What is 12 × 12?',                                   options: ['124', '144', '132', '148'],                              correct: 1 },
  { q: 'What is 256 ÷ 16?',                                  options: ['14', '18', '16', '12'],                                  correct: 2 },
  { q: 'What is 25% of 200?',                                options: ['25', '75', '50', '100'],                                 correct: 2 },
  { q: 'What is 3 cubed (3³)?',                              options: ['9', '18', '27', '30'],                                   correct: 2 },
  { q: 'How many degrees are in a right angle?',             options: ['45', '90', '180', '360'],                                correct: 1 },
  { q: 'What is 1000 − 357?',                               options: ['643', '657', '653', '647'],                              correct: 0 },
  { q: 'What is the next prime number after 11?',            options: ['12', '13', '14', '15'],                                  correct: 1 },
  { q: 'What is 7² (7 squared)?',                            options: ['42', '49', '56', '63'],                                  correct: 1 },
  { q: 'How many degrees are in all angles of a triangle?',  options: ['90', '180', '270', '360'],                               correct: 1 },
  { q: 'What is 15% of 60?',                                 options: ['6', '9', '12', '15'],                                    correct: 1 },
  // SCIENCE
  { q: 'What gas makes up most of Earth\'s atmosphere?',     options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],         correct: 2 },
  { q: 'What is the hardest natural substance?',             options: ['Gold', 'Iron', 'Diamond', 'Quartz'],                     correct: 2 },
  { q: 'What is the nearest star to Earth besides the Sun?', options: ['Sirius', 'Proxima Centauri', 'Betelgeuse', 'Vega'],     correct: 1 },
  { q: 'What force pulls objects toward Earth?',             options: ['Magnetism', 'Friction', 'Gravity', 'Buoyancy'],          correct: 2 },
  { q: 'How many chambers does the human heart have?',       options: ['2', '3', '4', '5'],                                      correct: 2 },
  { q: 'What is the powerhouse of the cell?',                options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Vacuole'],        correct: 2 },
  { q: 'What is the boiling point of water in Celsius?',    options: ['90°C', '95°C', '100°C', '110°C'],                       correct: 2 },
  { q: 'What type of animal is a dolphin?',                  options: ['Fish', 'Reptile', 'Mammal', 'Amphibian'],                correct: 2 },
  { q: 'What is the largest organ in the human body?',       options: ['Brain', 'Liver', 'Lungs', 'Skin'],                       correct: 3 },
  { q: 'What process do plants use to make food?',           options: ['Respiration', 'Digestion', 'Photosynthesis', 'Transpiration'], correct: 2 },
  // GEOGRAPHY
  { q: 'What is the capital of Japan?',                      options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],                  correct: 2 },
  { q: 'What is the longest river in the world?',            options: ['Amazon', 'Mississippi', 'Yangtze', 'Nile'],              correct: 3 },
  { q: 'What is the capital of Australia?',                  options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],              correct: 2 },
  { q: 'Which is the largest country by area?',              options: ['Canada', 'USA', 'China', 'Russia'],                      correct: 3 },
  { q: 'What is the capital of Brazil?',                     options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],   correct: 2 },
  { q: 'On which continent is the Amazon rainforest?',       options: ['Africa', 'Asia', 'South America', 'North America'],      correct: 2 },
  { q: 'In which country is the Eiffel Tower?',              options: ['Italy', 'Spain', 'Germany', 'France'],                   correct: 3 },
  { q: 'What is the capital of Canada?',                     options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],            correct: 2 },
  { q: 'Which continent is the largest by size?',            options: ['Africa', 'Asia', 'North America', 'Europe'],             correct: 1 },
  { q: 'What is the capital of Italy?',                      options: ['Milan', 'Venice', 'Naples', 'Rome'],                     correct: 3 },
  // ANIMALS
  { q: 'How many legs does a spider have?',                  options: ['6', '8', '10', '12'],                                    correct: 1 },
  { q: 'What is the largest land animal?',                   options: ['Giraffe', 'Hippopotamus', 'African Elephant', 'Rhinoceros'], correct: 2 },
  { q: 'What is a group of lions called?',                   options: ['Herd', 'Pack', 'Pride', 'Flock'],                        correct: 2 },
  { q: 'How many hearts does an octopus have?',              options: ['1', '2', '3', '4'],                                      correct: 2 },
  { q: 'Which common bird cannot fly?',                      options: ['Eagle', 'Parrot', 'Penguin', 'Pigeon'],                  correct: 2 },
  { q: 'What is the largest fish in the ocean?',             options: ['Great White Shark', 'Swordfish', 'Whale Shark', 'Manta Ray'], correct: 2 },
  { q: 'How many eyes does a bee have?',                     options: ['2', '3', '4', '5'],                                      correct: 3 },
  { q: 'What do caterpillars turn into?',                    options: ['Dragonflies', 'Moths or Butterflies', 'Beetles', 'Bees'], correct: 1 },
  { q: 'What is the tallest living animal?',                 options: ['Camel', 'Elephant', 'Giraffe', 'Ostrich'],               correct: 2 },
  { q: 'What is a baby kangaroo called?',                    options: ['Cub', 'Joey', 'Pup', 'Foal'],                            correct: 1 },
  // HISTORY
  { q: 'Who was the first person to walk on the Moon?',      options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'John Glenn'], correct: 2 },
  { q: 'In what year did World War II end?',                 options: ['1943', '1944', '1945', '1946'],                          correct: 2 },
  { q: 'Who invented the telephone?',                        options: ['Thomas Edison', 'Alexander Graham Bell', 'Nikola Tesla', 'Benjamin Franklin'], correct: 1 },
  { q: 'Who painted the Mona Lisa?',                         options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Pablo Picasso'], correct: 2 },
  { q: 'Who was the first President of the USA?',            options: ['Abraham Lincoln', 'John Adams', 'Thomas Jefferson', 'George Washington'], correct: 3 },
  { q: 'In what year did the Titanic sink?',                 options: ['1908', '1910', '1912', '1914'],                          correct: 2 },
  { q: 'In which year did humans first land on the Moon?',   options: ['1965', '1967', '1969', '1971'],                          correct: 2 },
  { q: 'Who invented the light bulb?',                       options: ['Alexander Graham Bell', 'Thomas Edison', 'Benjamin Franklin', 'Nikola Tesla'], correct: 1 },
  { q: 'Which country launched the first satellite into space?', options: ['USA', 'China', 'Russia (USSR)', 'Germany'],          correct: 2 },
  { q: 'In which city were the first modern Olympic Games held?', options: ['Paris', 'London', 'Athens', 'Rome'],                correct: 2 },
  // SPORTS
  { q: 'How many players are on a football/soccer team?',    options: ['9', '10', '11', '12'],                                   correct: 2 },
  { q: 'How many rings are on the Olympic flag?',            options: ['4', '5', '6', '7'],                                      correct: 1 },
  { q: 'In tennis, what is the term for zero points?',       options: ['Nil', 'Love', 'Zero', 'Nought'],                         correct: 1 },
  { q: 'How many players from one team are on a basketball court?', options: ['4', '5', '6', '7'],                               correct: 1 },
  { q: 'How many holes are on a standard golf course?',      options: ['9', '12', '18', '24'],                                   correct: 2 },
  { q: 'In which sport do you hit a shuttlecock?',           options: ['Squash', 'Tennis', 'Badminton', 'Paddleball'],            correct: 2 },
  { q: 'How many players are in a volleyball team on the court?', options: ['4', '5', '6', '7'],                                 correct: 2 },
  { q: 'In which sport is a puck used?',                     options: ['Basketball', 'Baseball', 'Ice Hockey', 'Football'],      correct: 2 },
  { q: 'How long is a marathon in kilometres?',              options: ['26 km', '32 km', '42 km', '48 km'],                      correct: 2 },
  { q: 'In which country did Karate originate?',             options: ['China', 'Korea', 'Japan', 'Thailand'],                   correct: 2 },
  // FOOD & CULTURE
  { q: 'From which country does pizza originate?',           options: ['Spain', 'Greece', 'Italy', 'France'],                    correct: 2 },
  { q: 'What is the main ingredient in guacamole?',          options: ['Tomato', 'Avocado', 'Lime', 'Onion'],                    correct: 1 },
  { q: 'Which fruit has its seeds on the outside?',          options: ['Raspberry', 'Blueberry', 'Strawberry', 'Blackberry'],    correct: 2 },
  { q: 'What gas makes fizzy drinks bubbly?',                options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],      correct: 2 },
  { q: 'What is the official language of Brazil?',           options: ['Spanish', 'Portuguese', 'French', 'English'],            correct: 1 },
  { q: 'How many strings does a standard guitar have?',      options: ['4', '5', '6', '7'],                                      correct: 2 },
  { q: 'What is the largest planet in our solar system?',    options: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],                correct: 1 },
  { q: 'How many colours are in a rainbow?',                 options: ['5', '6', '7', '8'],                                      correct: 2 },
  { q: 'What is the currency of Japan?',                     options: ['Yuan', 'Won', 'Yen', 'Ringgit'],                         correct: 2 },
  { q: 'How many teeth does an adult human normally have?',  options: ['28', '30', '32', '34'],                                  correct: 2 },
  // MORE MATH
  { q: 'What is the perimeter of a square with sides of 5?', options: ['10', '15', '20', '25'],                                 correct: 2 },
  { q: 'What is 2 to the power of 10?',                      options: ['512', '1024', '2048', '256'],                            correct: 1 },
  { q: 'How many centimetres are in a metre?',               options: ['10', '100', '1000', '10000'],                            correct: 1 },
  { q: 'What is the value of π (pi) to 2 decimal places?',  options: ['3.12', '3.14', '3.16', '3.18'],                         correct: 1 },
  { q: 'What is 17 × 3?',                                    options: ['48', '51', '54', '57'],                                  correct: 1 },
  { q: 'What is 100 ÷ 4?',                                   options: ['20', '25', '30', '40'],                                  correct: 1 },
  { q: 'How many millimetres are in a centimetre?',          options: ['5', '10', '20', '100'],                                  correct: 1 },
  { q: 'What is 11 × 11?',                                   options: ['111', '121', '112', '122'],                              correct: 1 },
  { q: 'How many sides does a pentagon have?',               options: ['4', '5', '6', '7'],                                      correct: 1 },
  { q: 'How many seconds are in one hour?',                  options: ['360', '600', '3600', '36000'],                           correct: 2 },
  // MORE SCIENCE
  { q: 'What is the chemical symbol for gold?',              options: ['Go', 'Gd', 'Au', 'Ag'],                                  correct: 2 },
  { q: 'What is the most abundant element in the universe?', options: ['Oxygen', 'Carbon', 'Helium', 'Hydrogen'],                correct: 3 },
  { q: 'How many chromosomes do humans normally have?',      options: ['23', '46', '48', '52'],                                  correct: 1 },
  { q: 'Which planet is the hottest in our solar system?',   options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],                   correct: 1 },
  { q: 'What is the unit of electrical resistance?',         options: ['Volt', 'Watt', 'Ohm', 'Ampere'],                         correct: 2 },
  { q: 'What is the study of earthquakes called?',           options: ['Meteorology', 'Geology', 'Seismology', 'Volcanology'],    correct: 2 },
  { q: 'How many planets in our solar system have rings?',   options: ['1', '2', '3', '4'],                                      correct: 3 },
  { q: 'What is the chemical symbol for iron?',              options: ['Ir', 'Io', 'Fe', 'In'],                                  correct: 2 },
  { q: 'What keeps planets in orbit around the Sun?',        options: ['Electromagnetism', 'Nuclear force', 'Gravity', 'Friction'], correct: 2 },
  { q: 'On which planet is Olympus Mons, the largest volcano in the solar system?', options: ['Earth', 'Venus', 'Mars', 'Jupiter'], correct: 2 },
  // BOOKS, CULTURE & MISC
  { q: 'Who wrote the Harry Potter series?',                 options: ['J.R.R. Tolkien', 'C.S. Lewis', 'J.K. Rowling', 'Roald Dahl'], correct: 2 },
  { q: 'What is the name of Harry Potter\'s owl?',           options: ['Crookshanks', 'Hedwig', 'Scabbers', 'Norbert'],          correct: 1 },
  { q: 'In which Roald Dahl book does a boy visit a chocolate factory?', options: ['James and the Giant Peach', 'Matilda', 'Charlie and the Chocolate Factory', 'The BFG'], correct: 2 },
  { q: 'What is the name of the lion in The Chronicles of Narnia?', options: ['Simba', 'Aslan', 'Leo', 'Nala'],                  correct: 1 },
  { q: 'What is the name of the hobbit in "The Hobbit"?',    options: ['Frodo', 'Bilbo', 'Samwise', 'Pippin'],                   correct: 1 },
  { q: 'Which instrument has 88 keys?',                      options: ['Organ', 'Accordion', 'Piano', 'Harpsichord'],            correct: 2 },
  { q: 'What number comes after one trillion?',              options: ['Quadrillion', 'Gazillion', 'Quintillion', 'Billion'],     correct: 0 },
  { q: 'What is the smallest planet in our solar system?',   options: ['Mars', 'Venus', 'Mercury', 'Pluto'],                     correct: 2 },
  { q: 'How many days are in a leap year?',                  options: ['364', '365', '366', '367'],                              correct: 2 },
  { q: 'Which country is home to the Great Barrier Reef?',   options: ['USA', 'Brazil', 'Australia', 'South Africa'],            correct: 2 },
];

// In-memory pending rolls: token → { userId, earned, correctIndex, expiresAt }
const pendingRolls = new Map();

// Clean expired tokens every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [token, data] of pendingRolls) {
    if (now > data.expiresAt) pendingRolls.delete(token);
  }
}, 5 * 60 * 1000);

// POST /users/login — create or fetch user by username
router.post('/login', (req, res) => {
  const { username } = req.body;

  if (!username || !USERNAME_REGEX.test(username)) {
    return res.status(400).json({ error: 'Invalid username. Use 1–10 alphanumeric characters only.' });
  }

  const existing = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

  if (existing) {
    return res.json({ user: existing, created: false });
  }

  const STARTING_COINS = 10;
  const result = db.prepare(
    'INSERT INTO users (username, coins) VALUES (?, ?)'
  ).run(username, STARTING_COINS);

  const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid);
  return res.status(201).json({ user: newUser, created: true });
});

// POST /users/:id/roll/start — pay 5 coins, get a quiz question + token
router.post('/:id/roll/start', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  if (!user) return res.status(404).json({ error: 'User not found.' });

  // Cooldown check
  const now = Date.now();
  if (user.last_roll_at) {
    const lastRoll = new Date(user.last_roll_at).getTime();
    const elapsed = now - lastRoll;
    if (elapsed < COOLDOWN_MS) {
      return res.status(429).json({ error: 'Cooldown active.', remaining_ms: COOLDOWN_MS - elapsed });
    }
  }

  // Check balance
  if (user.coins < ROLL_COST) {
    return res.status(402).json({ error: `You need at least ${ROLL_COST} coins to roll!` });
  }

  // Deduct cost and set cooldown
  const nowISO = new Date(now).toISOString();
  db.prepare('UPDATE users SET coins = coins - ?, last_roll_at = ? WHERE id = ?')
    .run(ROLL_COST, nowISO, userId);

  // Pick a question the user hasn't seen yet; reset when all have been shown
  let seen = [];
  try { seen = JSON.parse(user.seen_questions || '[]'); } catch (e) { seen = []; }
  if (!Array.isArray(seen)) seen = [];

  let available = QUIZ_POOL.map((_, i) => i).filter(i => !seen.includes(i));
  if (available.length === 0) {
    seen = [];  // reset — user has seen every question
    available = QUIZ_POOL.map((_, i) => i);
  }

  const qi  = available[Math.floor(Math.random() * available.length)];
  const q   = QUIZ_POOL[qi];
  seen.push(qi);
  db.prepare("UPDATE users SET seen_questions = ? WHERE id = ?").run(JSON.stringify(seen), userId);

  const earned = Math.floor(Math.random() * 41) + 40; // 40–80

  // Generate token
  const token = crypto.randomBytes(16).toString('hex');
  pendingRolls.set(token, {
    userId,
    earned,
    correctIndex: q.correct,
    expiresAt: now + 2 * 60 * 1000, // 2 min to answer
  });

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  return res.json({
    token,
    cost: ROLL_COST,
    question: q.q,
    options: q.options,
    user: updated,
  });
});

// POST /users/:id/roll/answer — submit quiz answer, get reward if correct
router.post('/:id/roll/answer', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { token, answer } = req.body;

  if (!token || typeof answer !== 'number') {
    return res.status(400).json({ error: 'Missing token or answer.' });
  }

  const pending = pendingRolls.get(token);
  if (!pending) return res.status(404).json({ error: 'Invalid or expired roll token.' });

  // One-time use
  pendingRolls.delete(token);

  if (pending.userId !== userId) return res.status(403).json({ error: 'Token does not belong to this user.' });

  if (Date.now() > pending.expiresAt) {
    return res.status(410).json({ error: 'Roll token expired.' });
  }

  const isCorrect = answer === pending.correctIndex;

  if (isCorrect) {
    db.prepare('UPDATE users SET coins = coins + ? WHERE id = ?')
      .run(pending.earned, userId);
  }

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  return res.json({
    correct: isCorrect,
    correctIndex: pending.correctIndex,
    earned: isCorrect ? pending.earned : 0,
    lost: ROLL_COST,
    user: updated,
  });
});

// GET /users/:id/inventory — get all purchased items
router.get('/:id/inventory', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = db.prepare('SELECT id FROM users WHERE id = ?').get(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const items = db.prepare(
    'SELECT * FROM inventory WHERE user_id = ? ORDER BY bought_at DESC'
  ).all(userId);

  return res.json({ items });
});

// POST /users/:id/buy — buy an item
router.post('/:id/buy', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { item_name, merchant_name, price } = req.body;

  if (!item_name || !merchant_name || typeof price !== 'number' || price < 1) {
    return res.status(400).json({ error: 'Missing or invalid purchase details.' });
  }

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  if (user.coins < price) {
    return res.status(402).json({ error: 'Insufficient coins.' });
  }

  // Atomic transaction: deduct coins and insert inventory row
  const purchase = db.transaction(() => {
    db.prepare('UPDATE users SET coins = coins - ? WHERE id = ?').run(price, userId);
    db.prepare(
      'INSERT INTO inventory (user_id, item_name, merchant_name, price_paid) VALUES (?, ?, ?, ?)'
    ).run(userId, item_name, merchant_name, price);
  });

  purchase();

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  return res.json({ success: true, user: updated });
});

// POST /users/:id/inventory/:itemId/list — put an item up for sale
router.post('/:id/inventory/:itemId/list', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const itemId = parseInt(req.params.itemId, 10);
  const { price } = req.body;

  if (typeof price !== 'number' || !Number.isInteger(price) || price < 1 || price > 999) {
    return res.status(400).json({ error: 'Price must be a whole number between 1 and 999.' });
  }

  const item = db.prepare('SELECT * FROM inventory WHERE id = ? AND user_id = ?').get(itemId, userId);
  if (!item) return res.status(404).json({ error: 'Item not found.' });

  db.prepare('UPDATE inventory SET listed_price = ? WHERE id = ?').run(price, itemId);
  return res.json({ success: true });
});

// POST /users/:id/inventory/:itemId/unlist — remove from sale
router.post('/:id/inventory/:itemId/unlist', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const itemId = parseInt(req.params.itemId, 10);

  const item = db.prepare('SELECT * FROM inventory WHERE id = ? AND user_id = ?').get(itemId, userId);
  if (!item) return res.status(404).json({ error: 'Item not found.' });

  db.prepare('UPDATE inventory SET listed_price = NULL WHERE id = ?').run(itemId);
  return res.json({ success: true });
});

// ---- Extra Merchant (dynamic cost sent from client) ----

// POST /users/:id/hire-merchant — deduct the cost for a new merchant slot
router.post('/:id/hire-merchant', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { cost } = req.body;

  if (typeof cost !== 'number' || !Number.isInteger(cost) || cost < 1 || cost > 100000) {
    return res.status(400).json({ error: 'Invalid cost value.' });
  }

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  if (!user) return res.status(404).json({ error: 'User not found.' });

  if (user.coins < cost) {
    return res.status(402).json({ error: `Need ${cost} coins to unlock this merchant slot.` });
  }

  db.prepare('UPDATE users SET coins = coins - ? WHERE id = ?').run(cost, userId);
  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  return res.json({ user: updated, cost });
});

// ---- Boss Entry Fee ----
const BOSS_ENTRY_FEE = 20;

// POST /users/:id/boss-entry — deduct 20 coins entry fee to challenge the boss
router.post('/:id/boss-entry', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user   = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  if (!user) return res.status(404).json({ error: 'User not found.' });

  if (user.coins < BOSS_ENTRY_FEE) {
    return res.status(402).json({ error: `Need ${BOSS_ENTRY_FEE} coins to enter the Boss Arena.` });
  }

  db.prepare('UPDATE users SET coins = coins - ? WHERE id = ?').run(BOSS_ENTRY_FEE, userId);
  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  return res.json({ user: updated });
});

// ---- Boss Fight rewards ----
const bossRewards     = new Map(); // userId -> lastRewardAt (ms)
const BOSS_REWARD_AMT = 75;
const BOSS_COOLDOWN   = 5 * 60 * 1000; // 5 minutes between rewards

// POST /users/:id/boss-reward — award coins for defeating the Dragon Boss
router.post('/:id/boss-reward', (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  if (!user) return res.status(404).json({ error: 'User not found.' });

  const lastReward = bossRewards.get(userId);
  if (lastReward && Date.now() - lastReward < BOSS_COOLDOWN) {
    const remaining = BOSS_COOLDOWN - (Date.now() - lastReward);
    return res.status(429).json({ error: 'Already claimed boss reward recently!', remaining_ms: remaining });
  }

  db.prepare('UPDATE users SET coins = coins + ? WHERE id = ?').run(BOSS_REWARD_AMT, userId);
  bossRewards.set(userId, Date.now());

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
  return res.json({ user: updated, reward: BOSS_REWARD_AMT });
});

module.exports = router;
