import { getRandomInt, isEven } from '../utils/index.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

const Even = {
  introduction: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion: getRandomInt,
  getCorrectAnswer: (number) => (isEven(number) ? Answers.yes : Answers.no),
};
export default Even;
