import readlineSync from 'readline-sync';
import Even from './games/brainEven.js';
import Calc from './games/brainCalc.js';
import Gcd from './games/brainGcd.js';
import Progression from './games/brainProgresion.js';
import Prime from './games/brainPrime.js';
import { GAME_NAMES, ROUNDS } from './const.js';

const GAMES = {
  [GAME_NAMES.calc]: Calc,
  [GAME_NAMES.even]: Even,
  [GAME_NAMES.gcd]: Gcd,
  [GAME_NAMES.progression]: Progression,
  [GAME_NAMES.prime]: Prime,
};

function play({ game }) {
  let loose = false;
  const Game = GAMES[game];

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(Game.introduction);

  for (let i = 0; i < ROUNDS; i += 1) {
    const questionText = Game.getQuestion();
    const correctAnswer = Game.getCorrectAnswer(questionText);

    console.log(`Question: ${questionText}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      loose = true;
      break;
    }
  }

  if (loose) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
}

export default play;
