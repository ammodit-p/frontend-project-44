import { getRandomInt } from '../utils/index.js';

function generateProgression() {
  let start = getRandomInt(7);
  const d = Math.max(getRandomInt(10), 1);
  const progression = Array.from({ length: 10 }, (() => {
    const item = start;
    start += d;
    console.log('start', start);
    return item;
  }));

  return progression;
}

let answer = '';

function getQuestion() {
  const progression = generateProgression();
  const replaceIndex = getRandomInt(progression.length);
  answer = progression[replaceIndex];
  progression[replaceIndex] = '...';
  return progression.join(' ');
}

function getCorrectAnswer() {
  return String(answer);
}

const Gcd = {
  introduction: 'What number is missing in the progression?',
  getQuestion,
  getCorrectAnswer,
};

export default Gcd;
