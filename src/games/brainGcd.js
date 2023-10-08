import { getRandomInt } from '../utils/index.js';

function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  }
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  const remainder = max % min;

  if (remainder === 0) {
    return min;
  }

  return gcd(remainder, min);
}

function GcdGame() {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);

  return {
    question: `${num1} ${num2}`,
    answer: String(gcd(num1, num2)),
  };
}

export default {
  introduction: 'Find the greatest common divisor of given numbers.',
  round: GcdGame,
};
