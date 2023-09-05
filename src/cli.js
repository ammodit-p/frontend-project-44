import readlineSync from 'readline-sync';

export function start() {
  console.log('Welcome to the Brain Games!');
}

export function askName() {
  const name = readlineSync.question('May I have your name? ');
  return name;
}

export function greetings(name) {
  console.log(`Hello, ${name}!`);
}
