export function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

export function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }

  return false;
}
