import { getRandomInt } from '../utils/index.js';
import play from '../utils/play.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

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

export default play({
  introduction: 'Answer "yes" if the number is even, otherwise answer "no".',
  round: Even,
});
