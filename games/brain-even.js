#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionBlockGenerator = () => {
  // generate Q/A constants
  const question = getRandomNumber();
  const trueAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [`${question}`, trueAnswer];
};
processGenerator(taskCondition, questionBlockGenerator);
