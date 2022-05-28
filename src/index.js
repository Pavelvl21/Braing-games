import readlineSync from 'readline-sync';
// ---------------------===============>>> BRAIN-GAMES ENGINE <<<===============--------------------
// ========================================= GREETING BLOCK ========================================
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
// =================================================================================================
// =========================================== TASK BLOCK ==========================================
export const getRandomNumber = () => Math.ceil(Math.random() * 100);
export default (taskCondition, questionBlockGenerator) => {
  console.log(taskCondition);
  let tasksCount = 3;//
  while (tasksCount > 0) {
    const [question, trueAnswer] = questionBlockGenerator();
    console.log(`Question: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === trueAnswer) {
      console.log('Correct!');
      tasksCount -= 1;
    } else {
      console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
// =================================================================================================
