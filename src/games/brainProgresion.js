import { getRandomInt } from '../utils/index.js';
import play from '../utils/play.js';

function generateProgression({ start, step, length }) {
  let n = start;
  const progression = Array.from({ length }, (() => {
    const item = n;
    n += step;
    return item;
  }));

  return progression;
}

function Progression() {
  const start = getRandomInt(7);
  const step = Math.max(getRandomInt(10), 1);
  const length = 10;
  const progression = generateProgression({ start, step, length });
  const replaceIndex = getRandomInt(progression.length);
  const answer = progression[replaceIndex];
  progression[replaceIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(answer),
  };
}

export default play({
  introduction: 'What number is missing in the progression?',
  round: Progression,
});
