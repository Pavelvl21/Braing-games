#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".?';
const questionBlockGenerator = () => {
  // generate number and check if generated number is prime
  const randomNumber = getRandomNumber();
  const isPrime = (number) => {
    const checkNumber = Math.floor(number / 2);
    for (let i = 2; i <= checkNumber; i += 1) {
      if (number % i === 0) {
        return false;
      }
    } return true;
  };
  // generate Q/A constants
  const question = randomNumber;
  const trueAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [`${question}`, trueAnswer];
};
processGenerator(taskCondition, questionBlockGenerator);
