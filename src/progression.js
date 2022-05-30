import { getRandomNumber } from './index.js';

export const gameName = 'brain-progression';
export const taskCondition = 'What number is missing in the progression?';
export const questionBlockGenerator = () => {
  // generate progression
  const progression = [];
  let firstNumber = getRandomNumber();
  const progressionCounter = getRandomNumber();
  progression.push(firstNumber);
  let iterCount = 10;
  while (iterCount > 0) {
    progression.push(progressionCounter + firstNumber);
    firstNumber = progressionCounter + firstNumber;
    iterCount -= 1;
  }
  // generate array with hidden char
  const hiddenChar = [];
  const getHiddenChar = () => {
    const randomPosition = getRandomNumber();
    hiddenChar.push(progression[randomPosition]);
    progression[randomPosition] = '..';
    return progression.join(' ');
  };
  // generate Q/A constants
  const question = getHiddenChar(progression);
  const [trueAnswer] = hiddenChar;
  return [`${question}`, `${trueAnswer}`];
};
