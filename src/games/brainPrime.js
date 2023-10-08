import { getRandomInt } from '../utils/index.js';

function isPrime(num) {
  if (num <= 1) {
    return false
  }
 for (let i = 2; i < num; i++) {
   if ((num % i ) === 0) {
     return false
   }
 }
 return true
}

let answer = '';

function getQuestion() {
  const num = getRandomInt(100);
  if (isPrime(num)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return num;
}

function getCorrectAnswer() {
  return answer;
}

const Prime = {
  introduction: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion,
  getCorrectAnswer,
};

export default Prime;
