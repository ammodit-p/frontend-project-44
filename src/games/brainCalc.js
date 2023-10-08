import { getRandomInt, getRandomArrayElement } from '../utils/index.js';

function plus(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

const OPERATIONS = {
  plus: '+',
  minus: '-',
  multiply: '*',
};

const OPERATIONS_MAP = {
  [OPERATIONS.minus]: minus,
  [OPERATIONS.plus]: plus,
  [OPERATIONS.multiply]: multiply,
};

function getQuestion() {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operation = getRandomArrayElement(Object.values(OPERATIONS));

  return `${num1} ${operation} ${num2}`;
}

function getCorrectAnswer(question) {
  const operationArray = question.split(' ');
  const num1 = operationArray[0];
  const num2 = operationArray[2];

  let answer = '';

  switch (operationArray[1]) {
    case OPERATIONS.minus:
      answer = String(OPERATIONS_MAP[OPERATIONS.minus](Number(num1), Number(num2)));
      break;
    case OPERATIONS.plus:
      answer = String(OPERATIONS_MAP[OPERATIONS.plus](Number(num1), Number(num2)));
      break;
    case OPERATIONS.multiply:
      answer = String(OPERATIONS_MAP[OPERATIONS.multiply](Number(num1), Number(num2)));
      break;
    default:
      throw new Error (`No such operation: ${operationArray[1]}`)
  }

  return answer;
}

const Calc = {
  introduction: 'What is the result of the expression?',
  getQuestion,
  getCorrectAnswer,
};
export default Calc;
