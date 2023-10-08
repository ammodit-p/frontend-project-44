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
  const Game = GAMES[game];

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(Game.introduction);

  for (let i = 0; i < ROUNDS; i += 1) {
    const {
      question,
      answer,
    } = Game.round();

    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default play;
