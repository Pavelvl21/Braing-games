import { getRandomNumber } from './index.js';

export const gameName = 'brain-even';
export const taskCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
export const questionBlockGenerator = () => {
  // generate Q/A constants
  const question = getRandomNumber();
  const trueAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [`${question}`, trueAnswer];
};
