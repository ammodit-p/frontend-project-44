#!/usr/bin/env node
import { start, askName, greetings } from '../src/cli.js';

start();
const name = askName();
greetings(name);
