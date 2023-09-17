#!/usr/bin/env node
import play from '../src/index.js';
import { GAME_NAMES } from '../src/const.js';

play({ game: GAME_NAMES.prime });