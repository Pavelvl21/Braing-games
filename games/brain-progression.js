#!/usr/bin/env node
import processGenerator from '../src/index.js';
import { questionBlockGenerator, taskCondition } from '../src/progression.js';

questionBlockGenerator();
processGenerator(taskCondition, questionBlockGenerator);
