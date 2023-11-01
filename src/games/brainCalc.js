import { getRandomInt, getRandomArrayElement } from '../utils/index.js';
import play from '../utils/play.js';

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

function Calc() {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operation = getRandomArrayElement(Object.values(OPERATIONS));

  let answer = '';

  switch (operation) {
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
      throw new Error(`No such operation: ${operation}`);
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    answer,
  };
}

export default play({
  introduction: 'What is the result of the expression?',
  round: Calc,
});
