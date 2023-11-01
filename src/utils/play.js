import readlineSync from 'readline-sync';

const ROUNDS = 3;

function play(game) {
  return () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(game.introduction);

    for (let i = 0; i < ROUNDS; i += 1) {
      const {
        question,
        answer,
      } = game.round();

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
  };
}

export default play;
