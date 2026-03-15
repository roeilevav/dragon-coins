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

// ============================================================
//  STATE
// ============================================================
let currentUser    = null;
let countdownInterval = null;
let pendingPurchase = null; // set when quiz opens
let pendingRollToken = null; // token from /roll/start
let inventoryCountMap = {}; // { itemName: count } — refreshed each market visit

// ============================================================
//  DOM HELPERS
// ============================================================
function $(id) { return document.getElementById(id); }

function showScreen(name) {
  if (name !== 'chat') {
    stopChatPoll();
    clearInterval(chatInboxInterval);
    chatInboxInterval = null;
  }
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
  ['roll-balance', 'market-balance', 'inv-balance', 'lb-balance', 'craft-balance', 'create-balance', 'boss-balance']
    .forEach(id => { const el = $(id); if (el) el.textContent = label; });
  ['roll-username', 'market-username', 'inv-username', 'lb-username', 'craft-username', 'create-username', 'boss-username']
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
const ROLL_COST    = 5;
const COOLDOWN_SEC = 60; // must match backend

function goToRollScreen() {
  updateBalances();
  $('roll-quiz').classList.add('hidden');
  $('roll-quiz-result').classList.add('hidden');
  renderRollState();
  showScreen('roll');
}

function renderRollState() {
  const btn             = $('roll-btn');
  const cooldownDisplay = $('cooldown-display');
  const marketBtn       = $('go-market-btn');

  if (currentUser.last_roll_at) marketBtn.classList.remove('hidden');

  // Disable roll if not enough coins
  const canAfford = currentUser.coins >= ROLL_COST;

  if (currentUser.last_roll_at) {
    const lastRoll  = new Date(currentUser.last_roll_at).getTime();
    const remaining = COOLDOWN_SEC * 1000 - (Date.now() - lastRoll);
    if (remaining > 0) {
      btn.disabled = true;
      cooldownDisplay.classList.remove('hidden');
      startCountdown(remaining);
      return;
    }
  }

  btn.disabled = !canAfford;
  if (!canAfford) {
    btn.textContent = '🎲 Not enough coins!';
  } else {
    btn.textContent = `🎲 Roll (🪙 ${ROLL_COST})`;
  }
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
      $('cooldown-display').classList.add('hidden');
      $('roll-result').classList.add('hidden');
      $('roll-quiz').classList.add('hidden');
      renderRollState(); // re-check affordability
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

// Step 1: Player clicks Roll → pay 5 coins, get a question
async function handleRoll() {
  const btn = $('roll-btn');
  btn.disabled = true;
  $('roll-result').classList.add('hidden');
  $('roll-quiz').classList.add('hidden');
  $('roll-quiz-result').classList.add('hidden');

  try {
    const { status, data } = await apiPost(`/users/${currentUser.id}/roll/start`, {});

    if (status === 429) {
      currentUser.last_roll_at = new Date(Date.now() - (COOLDOWN_SEC * 1000 - data.remaining_ms)).toISOString();
      startCountdown(data.remaining_ms);
      $('cooldown-display').classList.remove('hidden');
      return;
    }
    if (status === 402) {
      showToast(data.error || 'Not enough coins!', true);
      btn.disabled = false;
      return;
    }
    if (status !== 200) {
      showToast('Something went wrong. Try again!', true);
      btn.disabled = false;
      return;
    }

    // Update balance (5 coins deducted)
    currentUser = data.user;
    updateBalances();
    pendingRollToken = data.token;

    // Show the quiz question
    $('roll-quiz-question').textContent = data.question;
    const optsEl = $('roll-quiz-options');
    optsEl.innerHTML = data.options.map((opt, i) =>
      `<button class="roll-quiz-opt-btn" data-index="${i}">${opt}</button>`
    ).join('');
    $('roll-quiz').classList.remove('hidden');
    $('go-market-btn').classList.remove('hidden');

  } catch (err) {
    showToast('Could not reach server!', true);
    btn.disabled = false;
  }
}

// Step 2: Player picks an answer → send to server
async function handleRollQuizAnswer(e) {
  const btn = e.target.closest('.roll-quiz-opt-btn');
  if (!btn || !pendingRollToken) return;

  const answerIdx = parseInt(btn.dataset.index, 10);

  // Disable all quiz buttons
  document.querySelectorAll('.roll-quiz-opt-btn').forEach(b => { b.disabled = true; });

  try {
    const { status, data } = await apiPost(`/users/${currentUser.id}/roll/answer`, {
      token: pendingRollToken,
      answer: answerIdx,
    });
    pendingRollToken = null;

    if (status !== 200) {
      showToast(data.error || 'Answer failed!', true);
      startCountdown(COOLDOWN_SEC * 1000);
      $('cooldown-display').classList.remove('hidden');
      return;
    }

    // Highlight correct / wrong
    document.querySelectorAll('.roll-quiz-opt-btn').forEach(b => {
      const idx = parseInt(b.dataset.index, 10);
      if (idx === data.correctIndex) b.classList.add('correct');
      else if (b === btn && !data.correct) b.classList.add('wrong');
    });

    currentUser = data.user;
    updateBalances();

    // Show result message
    const resultEl = $('roll-quiz-result');
    if (data.correct) {
      const bonusStr = data.customBonus > 0
        ? ` <span class="roll-custom-bonus">✨ +${data.customBonus}% custom bonus!</span>`
        : '';
      resultEl.innerHTML = `<span class="roll-quiz-correct">🎉 Correct! You earned <strong>🪙 ${data.earned}</strong> Dragon Coins!${bonusStr}</span>`;
    } else {
      resultEl.innerHTML = `<span class="roll-quiz-wrong">❌ Wrong! You lost <strong>🪙 ${data.lost}</strong> coins. Better luck next time!</span>`;
    }
    resultEl.classList.remove('hidden');
    $('roll-result').classList.add('hidden');

    startCountdown(COOLDOWN_SEC * 1000);
    $('cooldown-display').classList.remove('hidden');

  } catch (err) {
    showToast('Could not reach server!', true);
    pendingRollToken = null;
  }
}

// ============================================================
//  QUIZ MODAL
// ============================================================
function showQuizModal(purchase) {
  // purchase = { type:'merchant'|'listing', itemName, merchantName, basePrice, listingId, btn }
  pendingPurchase = purchase;

  // Pick a question the user hasn't seen yet in the purchase quiz; reset when all done
  const PURCHASE_Q_KEY = `seenPurchaseQ_${currentUser.username}`;
  let seenPQ = [];
  try { seenPQ = JSON.parse(localStorage.getItem(PURCHASE_Q_KEY) || '[]'); } catch (e) { seenPQ = []; }
  if (!Array.isArray(seenPQ)) seenPQ = [];
  let availablePQ = QUIZ_QUESTIONS.map((_, i) => i).filter(i => !seenPQ.includes(i));
  if (availablePQ.length === 0) { seenPQ = []; availablePQ = QUIZ_QUESTIONS.map((_, i) => i); }
  const pqi = availablePQ[Math.floor(Math.random() * availablePQ.length)];
  seenPQ.push(pqi);
  localStorage.setItem(PURCHASE_Q_KEY, JSON.stringify(seenPQ));
  const q = QUIZ_QUESTIONS[pqi];

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
    setTimeout(async () => {
      await refreshInventoryCounts();
      renderMarket();
      for (let i = 0; i < extraMerchantsHired; i++) addExtraMerchantToGrid();
      renderPlayerListings();
    }, 300);

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
async function refreshInventoryCounts() {
  try {
    const { status, data } = await apiGet(`/users/${currentUser.id}/inventory`);
    inventoryCountMap = {};
    if (status === 200) {
      data.items.forEach(i => {
        inventoryCountMap[i.item_name] = (inventoryCountMap[i.item_name] || 0) + 1;
      });
    }
  } catch (e) { inventoryCountMap = {}; }
}

async function goToMarketScreen() {
  updateBalances();
  // Load saved merchant count from localStorage
  extraMerchantsHired = getHiredMerchantCount();
  await refreshInventoryCounts(); // fetch owned counts for the ×N badges
  renderMarket();                // renders 3 base merchants
  // Restore previously-bought extra merchant slots (no charge)
  for (let i = 0; i < extraMerchantsHired; i++) addExtraMerchantToGrid();
  renderPlayerListings();
  refreshHireStatus();           // show "X slots unlocked" if any
  updateHireMerchantBtn();       // set cost for the NEXT slot
  showScreen('market');
}

const BASE_MERCHANTS = 3; // start with 3 merchants

function shuffleItemsN(n) {
  const pool = [...ITEMS];
  const picked = [];
  while (picked.length < n) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

function renderMarket() {
  const grid = $('merchant-grid');
  grid.innerHTML = '';
  const selectedItems = shuffleItemsN(BASE_MERCHANTS);

  MERCHANTS.slice(0, BASE_MERCHANTS).forEach((merchant, i) => {
    const item      = selectedItems[i];
    const price     = Math.floor(Math.random() * 71) + 10; // 10–80
    const canAfford = currentUser.coins >= price;

    const ownedCount = inventoryCountMap[item.name] || 0;
    const countBadge = ownedCount >= 2 ? `<div class="item-owned-badge">×${ownedCount}</div>` : '';

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
      ${countBadge}
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
          <span class="lb-coins">⭐ ${row.points} pts</span>
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

    // Sort recipes: most ingredients owned (by ratio) first, none owned last
    const sortedCrafts = [...CRAFTS].sort((a, b) => {
      const aHave = a.requires.filter(r => ownedItems.includes(r)).length;
      const bHave = b.requires.filter(r => ownedItems.includes(r)).length;
      const aRatio = aHave / a.requires.length;
      const bRatio = bHave / b.requires.length;
      return bRatio - aRatio;
    });

    // Show ALL recipes — locked or unlocked based on owned items
    grid.innerHTML = sortedCrafts.map(c => {
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
//  EXTRA MERCHANT (MARKET)
//  Slots are PERMANENTLY bought (saved in localStorage).
//  Each new slot costs 60% more than the previous one.
//  200 → 320 → 512 → 819 → …
// ============================================================
const HIRE_BASE_COST       = 200;
const HIRE_COST_MULTIPLIER = 1.6;
let extraMerchantsHired    = 0; // loaded from localStorage each market visit

// --- localStorage helpers ---
function getHiredMerchantCount() {
  if (!currentUser) return 0;
  return parseInt(localStorage.getItem(`merchantSlots_${currentUser.username}`) || '0', 10);
}
function setHiredMerchantCount(n) {
  if (!currentUser) return;
  localStorage.setItem(`merchantSlots_${currentUser.username}`, String(n));
}

function getNextMerchantCost() {
  // Cost for the NEXT slot to buy (based on already-owned slots)
  return Math.round(HIRE_BASE_COST * Math.pow(HIRE_COST_MULTIPLIER, extraMerchantsHired));
}

function updateHireMerchantBtn() {
  const btn  = $('hire-merchant-btn');
  const cost = getNextMerchantCost();
  const num  = BASE_MERCHANTS + extraMerchantsHired + 1;
  btn.innerHTML = `⭐ Unlock Merchant Slot #${num} &nbsp;<span class="hire-cost">🪙 ${cost}</span>`;
  btn.disabled  = currentUser.coins < cost;
}

function refreshHireStatus() {
  const statusEl = $('hire-merchant-status');
  if (extraMerchantsHired > 0) {
    statusEl.textContent = `✅ ${extraMerchantsHired} extra slot${extraMerchantsHired > 1 ? 's' : ''} unlocked permanently`;
    statusEl.classList.remove('hidden');
  } else {
    statusEl.classList.add('hidden');
  }
}

async function handleHireMerchant() {
  const btn  = $('hire-merchant-btn');
  if (btn.disabled) return;
  const cost = getNextMerchantCost();

  if (currentUser.coins < cost) {
    showToast(`Need 🪙 ${cost} coins to unlock this merchant slot!`, true);
    return;
  }

  btn.disabled = true;
  try {
    const { status, data } = await apiPost(`/users/${currentUser.id}/hire-merchant`, { cost });
    if (status === 402) {
      showToast(`Not enough coins! Need 🪙 ${cost}`, true);
      updateHireMerchantBtn();
      return;
    }
    if (status !== 200) {
      showToast('Could not hire merchant. Try again!', true);
      updateHireMerchantBtn();
      return;
    }
    currentUser = data.user;
    updateBalances();

    // Persist the new count
    extraMerchantsHired++;
    setHiredMerchantCount(extraMerchantsHired);

    // Add the new card to the grid
    addExtraMerchantToGrid();
    refreshHireStatus();
    updateHireMerchantBtn();
    showToast(`⭐ Merchant slot #${BASE_MERCHANTS + extraMerchantsHired} unlocked permanently!`);
  } catch (err) {
    showToast('Could not reach server!', true);
    updateHireMerchantBtn();
  }
}

function addExtraMerchantToGrid() {
  const grid = $('merchant-grid');
  // Pick one item not already shown
  const currentItems = [...grid.querySelectorAll('.buy-btn')].map(b => b.dataset.item);
  const pool = ITEMS.filter(i => !currentItems.includes(i.name));
  if (pool.length === 0) return;
  const item      = pool[Math.floor(Math.random() * pool.length)];
  const price     = Math.floor(Math.random() * 51) + 30; // 30–80
  const canAfford = currentUser.coins >= price;

  const ownedCount = inventoryCountMap[item.name] || 0;
  const countBadge = ownedCount >= 2 ? `<div class="item-owned-badge">×${ownedCount}</div>` : '';

  const card = document.createElement('div');
  card.className = 'merchant-card extra-merchant-card';
  card.innerHTML = `
    <div class="merchant-avatar">⭐</div>
    <div class="merchant-name extra-merchant-name">Goldsworth</div>
    <div class="item-emoji">${item.emoji}</div>
    <div class="item-name">${item.name}</div>
    <div class="item-price">🪙 ${price}</div>
    <button class="btn btn-green buy-btn" ${canAfford ? '' : 'disabled'}
      data-item="${item.name}" data-merchant="Goldsworth" data-price="${price}">
      ${canAfford ? 'Buy ✨' : 'Too expensive 💸'}
    </button>
    ${countBadge}
  `;
  grid.appendChild(card);
}

// ============================================================
//  BOSS FIGHT
// ============================================================
// Scaling: each win makes boss 15% harder
const PLAYER_MAX_HP     = 100;  // restored — game is already hard from boss scaling
const BOSS_BASE_HP      = 150;
const BOSS_ENTRY_COST   = 20;   // coins to challenge the boss
const BOSS_REWARD_COINS = 75;

// Per-user boss level persisted in localStorage
// Key suffix "v2" resets everyone's progress back to Lv.1 on this deploy.
// (This only affects client-side boss level — coins/items in DB are untouched.)
const BOSS_LEVEL_KEY = (u) => `bossLevel_v2_${u}`;

function getBossLevel() {
  if (!currentUser) return 1;
  return parseInt(localStorage.getItem(BOSS_LEVEL_KEY(currentUser.username)) || '1', 10);
}
function setBossLevel(level) {
  if (!currentUser) return;
  localStorage.setItem(BOSS_LEVEL_KEY(currentUser.username), String(level));
}
function getBossScaledHp(level) {
  return Math.round(BOSS_BASE_HP * Math.pow(1.15, level - 1));
}
function getBossScaledDmgRange(level) {
  const scale = Math.pow(1.15, level - 1);
  return [Math.round(8 * scale), Math.round(20 * scale)];
}

let bossBattleItems  = [];
let bossCustomCount  = 0; // # of custom items in battle — each gives +3% custom damage
let bossCurrentHp    = BOSS_BASE_HP;
let bossTotalHp      = BOSS_BASE_HP;
let playerCurrentHp  = PLAYER_MAX_HP;
let bossGameOver     = false;
let bossAttacking    = false;
let currentBossLevel = 1;

function getBossDamageRange(item) {
  // Tuned so a custom item comfortably beats boss Lv.3 (198 HP)
  // Boss Lv.3 attacks 11–26 per turn; player has 100 HP (~4-5 turns to survive)
  if (item.is_custom)  return [45, 75]; // ★★★★ avg ~60 → kills Lv.3 in 3-4 hits
  if (item.is_crafted) return [30, 55]; // ★★★  avg ~42 → kills Lv.3 in 4-5 hits
  // Weapon-y market items
  const name = (item.item_name || '').toLowerCase();
  const weaponWords = ['sword','axe','ninja','shield','freeze','cannon','battle','magic','wand',
                       'potion','orb','crystal','fire','ice','thunder','star','bomb','dagger','lance'];
  if (weaponWords.some(w => name.includes(w))) return [18, 32]; // ★★ avg ~25
  return [10, 20]; // ★ regular market
}

function bossDamageRoll(item) {
  const [min, max] = getBossDamageRange(item);
  const raw = Math.floor(Math.random() * (max - min + 1)) + min;
  // Custom items get +3% damage per custom item owned in battle
  if (item.is_custom && bossCustomCount > 0) {
    return Math.round(raw * (1 + bossCustomCount * 0.03));
  }
  return raw;
}

function bossCounterRoll(level) {
  const [min, max] = getBossScaledDmgRange(level);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bossPowerLabel(item) {
  const [min, max] = getBossDamageRange(item);
  if (item.is_custom) {
    if (bossCustomCount > 0) {
      const boost = 1 + bossCustomCount * 0.03;
      const bMin  = Math.round(min * boost);
      const bMax  = Math.round(max * boost);
      const pct   = Math.round(bossCustomCount * 3);
      return `★★★★ Custom · ${bMin}–${bMax}⚔️ ⚡+${pct}%`;
    }
    return `★★★★ Custom · ${min}–${max}⚔️`;
  }
  if (item.is_crafted) return `★★★ Crafted · ${min}–${max}⚔️`;
  const name = (item.item_name || '').toLowerCase();
  const weaponWords = ['sword','axe','ninja','shield','freeze','cannon','battle','magic','wand',
                       'potion','orb','crystal','fire','ice','thunder','star','bomb'];
  return weaponWords.some(w => name.includes(w))
    ? `★★ Weapon · ${min}–${max}⚔️`
    : `★ Item · ${min}–${max}⚔️`;
}

async function goToBossScreen() {
  // Check entry fee before switching screens
  if (currentUser.coins < BOSS_ENTRY_COST) {
    showToast(`Need 🪙 ${BOSS_ENTRY_COST} coins to enter the Dragon's Lair!`, true);
    return;
  }

  updateBalances();
  showScreen('boss');
  $('boss-player-label').textContent = `👤 ${currentUser.username}`;
  $('boss-loading').classList.remove('hidden');
  $('boss-no-items').classList.add('hidden');
  $('boss-arena').classList.add('hidden');

  // Deduct entry fee
  try {
    const entryRes = await apiPost(`/users/${currentUser.id}/boss-entry`, {});
    if (entryRes.status === 402) {
      showToast('Not enough coins to enter!', true);
      $('boss-loading').classList.add('hidden');
      goToRollScreen();
      return;
    }
    if (entryRes.status === 200) {
      currentUser = entryRes.data.user;
      updateBalances();
    }
  } catch (_) { /* non-critical */ }

  try {
    const { status, data } = await apiGet(`/users/${currentUser.id}/inventory`);
    $('boss-loading').classList.add('hidden');

    if (status !== 200) { showToast('Could not load inventory 😢', true); return; }

    // All non-listed items can be used in battle
    const usable = data.items.filter(i => !i.listed_price);
    if (usable.length === 0) {
      $('boss-no-items').classList.remove('hidden');
      return;
    }

    currentBossLevel = getBossLevel();
    bossBattleItems  = usable;
    bossCustomCount  = usable.filter(i => i.is_custom).length;
    bossCurrentHp    = getBossScaledHp(currentBossLevel);
    bossTotalHp      = bossCurrentHp;
    playerCurrentHp  = PLAYER_MAX_HP;
    bossGameOver     = false;
    bossAttacking    = false;
    startBossBattle();

  } catch (err) {
    $('boss-loading').classList.add('hidden');
    showToast('Could not reach server 😢', true);
  }
}

function startBossBattle() {
  $('boss-arena').classList.remove('hidden');
  $('boss-gameover').classList.add('hidden');
  $('boss-attack-section').style.display = '';

  // Show boss level badge
  const lvlBadge = $('boss-level-badge');
  if (lvlBadge) lvlBadge.textContent = `Lv. ${currentBossLevel}`;

  // Change boss sprite as level rises (gets scarier)
  const sprite = $('boss-sprite-el');
  if (sprite) {
    if      (currentBossLevel >= 10) sprite.textContent = '👹';
    else if (currentBossLevel >= 5)  sprite.textContent = '🔥🐲🔥';
    else                             sprite.textContent = '🐲';
  }

  // Reset HP bars to full
  $('boss-hp-bar').style.width   = '100%';
  $('player-hp-bar').style.width = '100%';
  updateBossHpText();
  updatePlayerHpText();

  // Clear log
  const log = $('boss-log');
  log.innerHTML = '';
  const [dmgMin, dmgMax] = getBossScaledDmgRange(currentBossLevel);
  addBossLog(`🪙 ${BOSS_ENTRY_COST} coins entry fee paid. The Dragon's Lair opens...`, 'info');
  addBossLog(`🐲 Dragon Boss (Lv. ${currentBossLevel}) appears! HP: ${bossTotalHp} | Attacks: ${dmgMin}–${dmgMax} dmg`, 'boss-hit');
  addBossLog(`❤️ Your HP: ${PLAYER_MAX_HP} | ⚔️ Pick a weapon to attack!`, 'info');

  renderBossItems();
}

function updateBossHpText() {
  const pct = Math.max(0, bossCurrentHp) / bossTotalHp * 100;
  $('boss-hp-bar').style.width = pct + '%';
  $('boss-hp-text').textContent = `❤️ ${Math.max(0, bossCurrentHp)} / ${bossTotalHp}`;
}

function updatePlayerHpText() {
  const pct = Math.max(0, playerCurrentHp) / PLAYER_MAX_HP * 100;
  $('player-hp-bar').style.width = pct + '%';
  $('player-hp-text').textContent = `❤️ ${Math.max(0, playerCurrentHp)} / ${PLAYER_MAX_HP}`;
}

function addBossLog(msg, type = 'info') {
  const log = $('boss-log');
  const entry = document.createElement('div');
  entry.className = `boss-log-entry ${type}`;
  entry.textContent = msg;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

function renderBossItems() {
  const grid = $('boss-items-grid');
  grid.innerHTML = bossBattleItems.map((item, idx) => {
    let emoji;
    if (item.is_crafted) {
      const craft = CRAFTS.find(c => c.result.name === item.item_name);
      emoji = craft ? craft.result.emoji : '✨';
    } else if (item.is_custom) {
      emoji = '🎨';
    } else {
      emoji = itemEmoji(item.item_name);
    }
    const powerLabel = bossPowerLabel(item);
    const weaponClass = item.is_custom ? 'custom-weapon' : item.is_crafted ? 'crafted-weapon' : '';
    return `
      <div class="boss-item-card ${weaponClass}" data-boss-idx="${idx}">
        <div class="boss-item-emoji">${emoji}</div>
        <div class="boss-item-name">${item.item_name}</div>
        <span class="boss-item-power">${powerLabel}</span>
      </div>
    `;
  }).join('');
}

async function handleBossItemClick(e) {
  if (bossGameOver || bossAttacking) return;
  const card = e.target.closest('.boss-item-card');
  if (!card) return;

  const idx  = parseInt(card.dataset.bossIdx, 10);
  const item = bossBattleItems[idx];
  if (!item) return;

  bossAttacking = true;
  // Lock all item cards during animation
  document.querySelectorAll('.boss-item-card').forEach(c => c.classList.add('battle-locked'));

  // Player attacks
  const dmg = bossDamageRoll(item);
  bossCurrentHp -= dmg;
  const emoji = card.querySelector('.boss-item-emoji').textContent;
  addBossLog(`⚔️ You attack with ${emoji} ${item.item_name} — ${dmg} damage!`, 'player-hit');
  updateBossHpText();

  // Check if boss died
  if (bossCurrentHp <= 0) {
    bossCurrentHp = 0;
    updateBossHpText();
    await new Promise(r => setTimeout(r, 500));
    endBossBattle(true);
    return;
  }

  // Wait before boss counter
  await new Promise(r => setTimeout(r, 650));

  // Boss counter-attacks (scaled by level)
  const bossDmg = bossCounterRoll(currentBossLevel);
  playerCurrentHp -= bossDmg;
  addBossLog(`🐲 Dragon Boss breathes fire — ${bossDmg} damage to you!`, 'boss-hit');
  updatePlayerHpText();

  // Check if player died
  if (playerCurrentHp <= 0) {
    playerCurrentHp = 0;
    updatePlayerHpText();
    await new Promise(r => setTimeout(r, 500));
    endBossBattle(false);
    return;
  }

  // Unlock cards
  bossAttacking = false;
  document.querySelectorAll('.boss-item-card').forEach(c => c.classList.remove('battle-locked'));
}

async function endBossBattle(playerWon) {
  bossGameOver  = true;
  bossAttacking = false;
  $('boss-attack-section').style.display = 'none';

  const gameover = $('boss-gameover');
  gameover.classList.remove('hidden');

  if (playerWon) {
    // Level up the boss for next fight
    const newLevel = currentBossLevel + 1;
    setBossLevel(newLevel);
    const nextHp  = getBossScaledHp(newLevel);
    const [nMin, nMax] = getBossScaledDmgRange(newLevel);

    addBossLog('🏆 VICTORY! The Dragon Boss has been defeated!', 'info');
    addBossLog(`⚡ The boss powered up! Next fight: Lv.${newLevel} | HP ${nextHp} | Attacks ${nMin}–${nMax}`, 'boss-hit');

    gameover.innerHTML = `
      <div class="boss-gameover-icon">🏆</div>
      <div class="boss-gameover-title">Victory!</div>
      <div class="boss-gameover-msg">You defeated Dragon Boss Lv. ${currentBossLevel}! Amazing!</div>
      <div class="boss-gameover-reward" id="boss-reward-display">🪙 Claiming your reward...</div>
      <div class="boss-levelup-warn">⚡ Boss levelled up to <strong>Lv. ${newLevel}</strong>!<br>Next HP: ${nextHp} | Attack: ${nMin}–${nMax} dmg</div>
      <button class="btn btn-gold btn-large" id="boss-play-again-btn">⚔️ Fight Lv.${newLevel}!</button>
      <button class="btn btn-purple" id="boss-go-roll-btn2">🎲 Back to Roll</button>
    `;
    document.getElementById('boss-play-again-btn').addEventListener('click', () => goToBossScreen());
    document.getElementById('boss-go-roll-btn2').addEventListener('click', goToRollScreen);

    // Claim backend reward
    try {
      const { status, data } = await apiPost(`/users/${currentUser.id}/boss-reward`, {});
      if (status === 200) {
        currentUser = data.user;
        updateBalances();
        document.getElementById('boss-reward-display').textContent = `🪙 +${data.reward} coins earned!`;
      } else if (status === 429) {
        document.getElementById('boss-reward-display').textContent = `⏳ Reward on cooldown — fight again for glory!`;
      } else {
        document.getElementById('boss-reward-display').textContent = `🎉 Victory is its own reward!`;
      }
    } catch (err) {
      document.getElementById('boss-reward-display').textContent = `🎉 You are a true Dragon Trainer!`;
    }

  } else {
    addBossLog('💀 Defeated... The Dragon Boss wins this round!', 'info');
    const [dMin, dMax] = getBossScaledDmgRange(currentBossLevel);
    gameover.innerHTML = `
      <div class="boss-gameover-icon">💀</div>
      <div class="boss-gameover-title">Defeated!</div>
      <div class="boss-gameover-msg">Dragon Boss Lv.${currentBossLevel} was too powerful! (HP: ${bossTotalHp} | Attack: ${dMin}–${dMax})<br>Get more crafted items and try again!</div>
      <button class="btn btn-gold btn-large" id="boss-play-again-btn2">⚔️ Try Again!</button>
      <button class="btn btn-purple" id="boss-go-craft-btn">🔨 Craft Items</button>
    `;
    document.getElementById('boss-play-again-btn2').addEventListener('click', () => goToBossScreen());
    document.getElementById('boss-go-craft-btn').addEventListener('click', goToCraftScreen);
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

// ============================================================
//  CHAT SCREEN
// ============================================================
let chatPollInterval  = null;
let chatInboxInterval = null;
let chatWithUserId    = null;
let chatWithUsername  = '';

function goToChatScreen() {
  updateBalances();
  $('chat-username').textContent = currentUser.username;
  showScreen('chat');
  showChatInbox();
  loadChatInbox();
  // Poll inbox every 4 seconds so new incoming conversations appear automatically
  clearInterval(chatInboxInterval);
  chatInboxInterval = setInterval(loadChatInbox, 4000);
}

async function loadChatInbox() {
  const { status, data } = await apiGet(`/chat/inbox?me=${currentUser.id}`);
  const list  = $('chat-inbox-list');
  const empty = $('chat-inbox-empty');

  if (status !== 200 || data.conversations.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  list.innerHTML = data.conversations.map(c => `
    <div class="chat-inbox-item" data-uid="${c.partner_id}" data-uname="${c.partner_username}">
      <span class="chat-inbox-name">👤 ${c.partner_username}</span>
      <span class="chat-inbox-preview">${c.last_message.length > 40 ? c.last_message.slice(0, 40) + '…' : c.last_message}</span>
    </div>
  `).join('');

  list.querySelectorAll('.chat-inbox-item').forEach(el => {
    el.addEventListener('click', () => {
      openConversation(parseInt(el.dataset.uid), el.dataset.uname);
    });
  });
}

function showChatInbox() {
  stopChatPoll();
  chatWithUserId   = null;
  chatWithUsername = '';
  $('chat-panel').classList.remove('hidden');
  $('chat-search-panel').classList.add('hidden');
  $('chat-conv-panel').classList.add('hidden');
  $('chat-search-input').value = '';
  $('chat-search-results').innerHTML = '';
  loadChatInbox();
  // Resume inbox polling
  clearInterval(chatInboxInterval);
  chatInboxInterval = setInterval(loadChatInbox, 4000);
}

function showChatSearchPanel() {
  $('chat-panel').classList.add('hidden');
  $('chat-search-panel').classList.remove('hidden');
  $('chat-conv-panel').classList.add('hidden');
  $('chat-search-input').value = '';
  $('chat-search-results').innerHTML = '';
  $('chat-search-input').focus();
}

async function handleChatSearch() {
  const q   = $('chat-search-input').value.trim();
  const res = $('chat-search-results');
  if (!q) { res.innerHTML = ''; return; }

  const { status, data } = await apiGet(`/chat/search?q=${encodeURIComponent(q)}&me=${currentUser.id}`);

  if (status !== 200 || data.users.length === 0) {
    res.innerHTML = `<p class="chat-no-results">No players found for "${q}"</p>`;
    return;
  }

  res.innerHTML = data.users.map(u => `
    <div class="chat-search-item" data-uid="${u.id}" data-uname="${u.username}">
      👤 ${u.username}
    </div>
  `).join('');

  res.querySelectorAll('.chat-search-item').forEach(el => {
    el.addEventListener('click', () => {
      openConversation(parseInt(el.dataset.uid), el.dataset.uname);
    });
  });
}

function openConversation(userId, username) {
  clearInterval(chatInboxInterval); // stop inbox refresh while in conversation
  chatWithUserId   = userId;
  chatWithUsername = username;
  $('chat-panel').classList.add('hidden');
  $('chat-search-panel').classList.add('hidden');
  $('chat-conv-panel').classList.remove('hidden');
  $('chat-conv-title').textContent = `💬 ${username}`;
  $('chat-msg-input').value = '';
  $('chat-messages-list').innerHTML = '<p class="empty-state">Loading… ⏳</p>';
  fetchConversation();
  startChatPoll();
}

async function fetchConversation() {
  const { status, data } = await apiGet(`/chat/conversation?me=${currentUser.id}&with=${chatWithUserId}`);
  if (status !== 200) return;

  const list = $('chat-messages-list');
  if (data.messages.length === 0) {
    list.innerHTML = `<p class="chat-empty-conv">No messages yet — say hi! 👋</p>`;
    return;
  }

  list.innerHTML = data.messages.map(m => {
    const isMe       = m.sender_id === currentUser.id;
    const senderName = isMe ? 'You' : m.sender_username;
    const time       = new Date(m.created_at + 'Z').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `
      <div class="chat-msg ${isMe ? 'chat-msg-me' : 'chat-msg-them'}">
        <div class="chat-sender-name">${escapeHtml(senderName)}</div>
        <div class="chat-bubble">${escapeHtml(m.message)}</div>
        <div class="chat-time">${time}</div>
      </div>
    `;
  }).join('');

  // Scroll to bottom after browser has painted the new content
  requestAnimationFrame(() => { list.scrollTop = list.scrollHeight; });
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function handleChatSend() {
  const input = $('chat-msg-input');
  const msg   = input.value.trim();
  if (!msg || !chatWithUserId) return;

  input.value = '';
  await apiPost('/chat/send', {
    sender_id:    currentUser.id,
    recipient_id: chatWithUserId,
    message:      msg,
  });
  fetchConversation();
}

function startChatPoll() {
  stopChatPoll();
  chatPollInterval = setInterval(fetchConversation, 3000);
}

function stopChatPoll() {
  if (chatPollInterval) { clearInterval(chatPollInterval); chatPollInterval = null; }
}

function attachListeners() {
  $('login-form').addEventListener('submit', handleLogin);
  $('roll-btn').addEventListener('click', handleRoll);
  $('roll-quiz-options').addEventListener('click', handleRollQuizAnswer);

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
  $('hire-merchant-btn').addEventListener('click', handleHireMerchant);

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

  // Boss Fight — nav links TO boss from all screens
  $('nav-boss-from-roll').addEventListener('click',   e => { e.preventDefault(); goToBossScreen(); });
  $('nav-boss-from-market').addEventListener('click', e => { e.preventDefault(); goToBossScreen(); });
  $('nav-boss-from-inv').addEventListener('click',    e => { e.preventDefault(); goToBossScreen(); });
  $('nav-boss-from-lb').addEventListener('click',     e => { e.preventDefault(); goToBossScreen(); });
  $('nav-boss-from-craft').addEventListener('click',  e => { e.preventDefault(); goToBossScreen(); });
  $('nav-boss-from-create').addEventListener('click', e => { e.preventDefault(); goToBossScreen(); });

  // Boss Fight — nav links FROM boss screen
  $('nav-roll-from-boss').addEventListener('click',       e => { e.preventDefault(); goToRollScreen(); });
  $('nav-market-from-boss').addEventListener('click',     e => { e.preventDefault(); goToMarketScreen(); });
  $('nav-inventory-from-boss').addEventListener('click',  e => { e.preventDefault(); goToInventoryScreen(); });
  $('nav-leaderboard-from-boss').addEventListener('click',e => { e.preventDefault(); goToLeaderboardScreen(); });
  $('nav-craft-from-boss').addEventListener('click',      e => { e.preventDefault(); goToCraftScreen(); });
  $('nav-create-from-boss').addEventListener('click',     e => { e.preventDefault(); goToCreateScreen(); });
  $('nav-chat-from-boss').addEventListener('click',       e => { e.preventDefault(); goToChatScreen(); });

  // Chat nav from all screens
  $('nav-chat-from-roll').addEventListener('click',       e => { e.preventDefault(); goToChatScreen(); });
  $('nav-chat-from-market').addEventListener('click',     e => { e.preventDefault(); goToChatScreen(); });
  $('nav-chat-from-inv').addEventListener('click',        e => { e.preventDefault(); goToChatScreen(); });
  $('nav-chat-from-lb').addEventListener('click',         e => { e.preventDefault(); goToChatScreen(); });
  $('nav-chat-from-craft').addEventListener('click',      e => { e.preventDefault(); goToChatScreen(); });
  $('nav-chat-from-create').addEventListener('click',     e => { e.preventDefault(); goToChatScreen(); });

  // (Chat top bar only has Roll button — wired above)

  // Chat controls
  $('chat-roll-btn').addEventListener('click', goToRollScreen);
  $('chat-open-search-btn').addEventListener('click', showChatSearchPanel);
  $('chat-search-back-btn').addEventListener('click', showChatInbox);
  $('chat-search-btn').addEventListener('click', handleChatSearch);
  $('chat-search-input').addEventListener('keydown', e => { if (e.key === 'Enter') handleChatSearch(); });
  $('chat-send-btn').addEventListener('click', handleChatSend);
  $('chat-msg-input').addEventListener('keydown', e => { if (e.key === 'Enter') handleChatSend(); });
  $('chat-back-btn').addEventListener('click', showChatInbox);

  // Boss Fight — combat and controls
  $('boss-items-grid').addEventListener('click', handleBossItemClick);
  $('boss-flee-btn').addEventListener('click', () => { goToRollScreen(); });
  $('boss-go-market-btn').addEventListener('click', goToMarketScreen);

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
