import { getRandomInt } from '../utils/index.js';
import { Answers } from '../const.js';

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }

  return false;
}

function Even() {
  const question = getRandomInt();

  return {
    question,
    answer: isEven(question) ? Answers.yes : Answers.no,
  };
}

export default {
  introduction: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: Even,
};
