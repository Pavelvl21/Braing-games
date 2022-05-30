#!/usr/bin/env node
import processGenerator from '../src/index.js';
import { gameName, questionBlockGenerator, taskCondition } from '../src/gcd.js';

processGenerator(gameName, taskCondition, questionBlockGenerator);
