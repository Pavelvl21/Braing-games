import readlineSync from 'readline-sync';
// ---------------------===============>>> BRAIN-GAMES ENGINE <<<===============--------------------
export const getRandomNumber = () => Math.ceil(Math.random() * 10);
export default (gameName, taskCondition, questionBlockGenerator) => {
  // ---------------------------------- greeting block ---------------------------------------------
  console.log(`${gameName}\nWelcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // ------------------------------------ TACK BLOCK -----------------------------------------------
  console.log(taskCondition);
  let tasksCount = 3;
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
