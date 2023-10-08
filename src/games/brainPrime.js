import { getRandomInt } from '../utils/index.js';
import { Answers } from '../const.js';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if ((num % i) === 0) {
      return false;
    }
  }
  return true;
}

function Prime() {
  const question = getRandomInt(100);

  return {
    question,
    answer: isPrime(question) ? Answers.yes : Answers.no,
  };
}

export default {
  introduction: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  round: Prime,
};
