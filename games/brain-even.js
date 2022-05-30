#!/usr/bin/env node
import processGenerator from '../src/index.js';
import { gameName, questionBlockGenerator, taskCondition } from '../src/even.js';

processGenerator(gameName, taskCondition, questionBlockGenerator);
