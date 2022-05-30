#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'What number is missing in the progression?';
const questionBlockGenerator = () => {
  // generate progression
  const progression = [];
  let firstNumber = getRandomNumber();
  // progression counter is aqual 1/10 of random number
  const progressionCounter = Math.ceil(getRandomNumber() / 10);
  progression.push(firstNumber);
  let iterCount = 10;
  while (iterCount < 10) {
    progression.push(progressionCounter + firstNumber);
    firstNumber = progressionCounter + firstNumber;
    iterCount -= 1;
  }
  // generate array with hidden char
  const hiddenChar = [];
  const getHiddenChar = () => {
    // random position is aqual 1/10 of random number
    const randomPosition = Math.floor(getRandomNumber() / 10);
    hiddenChar.push(progression[randomPosition]);
    progression[randomPosition] = '..';
    return progression.join(' ');
  };
  // generate Q/A constants
  const question = getHiddenChar(progression);
  const [trueAnswer] = hiddenChar;
  return [`${question}`, `${trueAnswer}`];
};
processGenerator(taskCondition, questionBlockGenerator);
