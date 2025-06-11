const main = document.querySelector('.main');
const typeArea = document.querySelector('.typeArea');
const btn = document.querySelector('.btn');

const words = [
  'Hello', 'World', 'JavaScript', 'Typing', 'Speed', 'Challenge', 'Code', 'Practice', 'Learn', 'Fun',
  'Game', 'Test', 'Type', 'Accuracy', 'Focus', 'Improve', 'Enjoy', 'Success', 'Achievement', 'Skill',
  'Progress', 'Motivation', 'Inspiration', 'Dedication', 'Perseverance', 'Commitment', 'Excellence',
  'Innovation', 'Creativity', 'Collaboration', 'Teamwork', 'Leadership', 'Vision', 'Strategy', 'Goals',
  'Dreams', 'Future', 'Potential', 'Growth', 'Development', 'Learning', 'Knowledge', 'Wisdom', 'Experience',
  'Insight', 'Understanding', 'Perspective', 'Clarity', 'Discipline', 'Resilience', 'Courage', 'Confidence',
  'Passion', 'Enthusiasm', 'Energy', 'Joy', 'Happiness', 'Gratitude', 'Kindness', 'Empathy', 'Compassion',
  'Respect', 'Integrity', 'Honesty', 'Trust', 'Loyalty', 'Friendship', 'Love', 'Family', 'Community',
  'Connection', 'Support', 'Unity', 'Diversity', 'Inclusion', 'Acceptance', 'Tolerance', 'Peace', 'Harmony',
  'Balance', 'Wellness', 'Health', 'Fitness', 'Nutrition', 'Exercise', 'Mindfulness', 'Meditation',
  'Relaxation', 'Rest', 'Sleep', 'Self-care', 'Self-love', 'Self-improvement', 'Self-awareness',
  'Self-discovery', 'Self-acceptance', 'Self-confidence', 'Self-esteem', 'Self-expression', 'Self-motivation',
  'Self-discipline', 'Self-reflection', 'Self-growth', 'Self-development', 'Self-empowerment',
  'Self-actualization', 'Self-realization'
];

let currentWord = '';
let startTime = null;
let isPlaying = false;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function startGame() {
  currentWord = getRandomWord();
  main.textContent = currentWord;
  typeArea.value = '';
  typeArea.disabled = false;
  typeArea.focus();
  btn.textContent = 'Reset';
  startTime = Date.now();
  isPlaying = true;
}

function endGame() {
  const endTime = Date.now();
  const timeTaken = (endTime - startTime) / 1000; // seconds
  const wpm = Math.round((currentWord.length / 5) / (timeTaken / 60));
  main.textContent = `You typed "${currentWord}" in ${timeTaken.toFixed(2)} seconds. WPM: ${wpm}`;
  typeArea.disabled = true;
  btn.textContent = 'Start';
  isPlaying = false;
}

btn.onclick = function () {
  if (!isPlaying) {
    startGame();
  } else {
    // Reset game
    main.textContent = '';
    typeArea.value = '';
    typeArea.disabled = true;
    btn.textContent = 'Start';
    isPlaying = false;
  }
};

typeArea.oninput = function () {
  if (!isPlaying) return;
  if (typeArea.value === currentWord) {
    endGame();
  }
};