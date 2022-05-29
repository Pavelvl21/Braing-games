#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'What number is missing in the progression?';
const questionBlockGenerator = () => {
  // generate progression
  const progression = [];
  let firstNumber = getRandomNumber();
  const progressionCounter = Math.ceil(getRandomNumber() / 10);
  progression.push(firstNumber);
  let i = 0;
  while (i < 10) {
    progression.push(progressionCounter + firstNumber);
    firstNumber = progressionCounter + firstNumber;
    i += 1;
  }
  // generate array with hidden char
  const hiddenChar = [];
  const getHiddenChar = () => {
    const randomPosition = Math.floor(getRandomNumber() / 10);
    hiddenChar.push(progression[randomPosition]);
    progression[randomPosition] = '*';
    return progression.join(' ');
  };
  // generate Q/A constants
  const question = getHiddenChar(progression);
  const [trueAnswer] = hiddenChar;
  return [`${question}`, `${trueAnswer}`];
};
processGenerator(taskCondition, questionBlockGenerator);
