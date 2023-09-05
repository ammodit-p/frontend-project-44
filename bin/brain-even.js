#!/usr/bin/env node
import { start, askName, greetings } from '../src/cli.js';
import play from '../src/brainEven/index.js';

start();
const name = askName();
greetings(name);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const loose = play();

if (loose) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
