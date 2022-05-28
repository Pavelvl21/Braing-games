#!/usr/bin/env node
import processGenerator, { getRandomNumber } from '../src/index.js';

const taskCondition = 'What is the result of the expression?';
const questionBlockGenerator = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const generateSymbol = () => {
    const randomNumber = getRandomNumber();
    if (randomNumber > 66) {
      return '*';
    } if (randomNumber < 34) {
      return '-';
    } return '+';
  };
  const operator = `${generateSymbol()}`;
  let result;
  let operation;
  switch (operator) {
    case '+':
      result = firstRandomNumber + secondRandomNumber;
      operation = `${firstRandomNumber} + ${secondRandomNumber}`;
      break;
    case '-':
      result = firstRandomNumber - secondRandomNumber;
      operation = `${firstRandomNumber} - ${secondRandomNumber}`;
      break;
    case '*':
      result = firstRandomNumber * secondRandomNumber;
      operation = `${firstRandomNumber} * ${secondRandomNumber}`;
      break;
    default:
      break;
  } const question = operation;
  const trueAnswer = result;
  return [`${question}`, `${trueAnswer}`];
};
processGenerator(taskCondition, questionBlockGenerator);
