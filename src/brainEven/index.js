import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from '../utils/index.js';

const Answers = {
  yes: 'yes',
  no: 'no',
};

const correctAnswers = 3;
let loose = false;

export default () => {
  for (let i = 0; i < correctAnswers; i += 1) {
    const number = getRandomInt();
    const correctAnswer = isEven(number) ? Answers.yes : Answers.no;

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      loose = true;
      break;
    }
  }

  return loose;
};
