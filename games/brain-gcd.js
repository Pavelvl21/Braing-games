#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'Find the greatest common divisor of given numbers.';
const questionBlockGenerator = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const allDivisors = [];
  const greatestDivisor = [];
  // push all dividors to stak
  for (let i = 0, j = 0; i <= firstRandomNumber || j <= secondRandomNumber; i += 1, j += 1) {
    if (firstRandomNumber % i === 0) {
      allDivisors.push(i);
    } if (secondRandomNumber % j === 0) {
      allDivisors.push(j);
    }
  }
  // find GCD
  for (let i = 0; i < allDivisors.length; i += 1) {
    if (allDivisors.slice(i + 1).includes(allDivisors[i]) === true) {
      greatestDivisor.pop();
      greatestDivisor.push(allDivisors[i]);
    }
  }
  // generate Q/A constants
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const [trueAnswer] = greatestDivisor;
  return [`${question}`, `${trueAnswer}`];
};
processGenerator(taskCondition, questionBlockGenerator);
