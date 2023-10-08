export function getRandomInt(max) {
  return Math.floor(Math.random() * (max ?? 100));
}

export function getRandomArrayElement(array) {
  const max = array.length;
  const randonIndex = getRandomInt(max);
  return array[randonIndex];
}
