import { getRandomInt } from '../utils/index.js';
import play from '../utils/play.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
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

export default play({
  introduction: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  round: Prime,
});
