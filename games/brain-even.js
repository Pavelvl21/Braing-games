#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionBlockGenerator = () => {
  const task = getRandomNumber();
  const check = task % 2 === 0 ? 'yes' : 'no';
  return [`${task}`, check];
};
processGenerator(taskCondition, questionBlockGenerator);
