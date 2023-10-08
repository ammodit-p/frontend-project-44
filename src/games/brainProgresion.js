import { getRandomInt } from '../utils/index.js';

function generateProgression({start, step, length}) {
  const progression = Array.from({ length }, (() => {
    const item = start;
    start += step;
    console.log('start', start);
    return item;
  }));

  return progression;
}

let answer = '';

function getQuestion() {
  const start = getRandomInt(7);
  const step = Math.max(getRandomInt(10), 1);
  const length = 10
  const progression = generateProgression({ start, step, length });
  const replaceIndex = getRandomInt(progression.length);
  answer = progression[replaceIndex];
  progression[replaceIndex] = '..';
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
