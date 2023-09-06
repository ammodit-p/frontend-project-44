import { getRandomInt } from '../utils/index.js';

function gcd(num1, num2) {
  if (num1 === num2) {
    return num1
  }
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  const remainder = max % min;

  if (remainder === 0) {
    return min;
  }

  return String(gcd(remainder, min));
}

function getQuestion() {
  const num1 = getRandomInt();
  const num2 = getRandomInt();

  return `${num1} ${num2}`;
}

function getCorrectAnswer(question) {
  const numbersArray = question.split(' ');

  return gcd(...numbersArray);
}

const Gcd = {
  introduction: 'Find the greatest common divisor of given numbers.',
  getQuestion,
  getCorrectAnswer,
};

export default Gcd;
