import { getRandomInt } from '../utils/index.js';

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];

function isPrime(num) {
  return primes.includes(num);
}

let answer = '';

function getQuestion() {
  const num = getRandomInt(100);
  if (isPrime(num)) {
    answer = 'yes';
  } else {
      answer = 'no'
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
