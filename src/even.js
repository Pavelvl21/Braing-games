import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('So, what\'s you name? ');
  console.log(`Hi, ${userName}!`);
  const isEven = (num) => num % 2 === 0;
  let count = 1;
  while (count <= 3) {
    const genRandomNumber = Math.ceil(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${genRandomNumber}\nYour answer: `);
    if ((isEven(genRandomNumber) === true && answer === 'yes') || (isEven(genRandomNumber) === false && answer === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      const trueAnswer = (answer === 'yes' ? 'no' : 'yes');
      return (`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'\nLet's try again, ${userName}`);
    }
  } return `Congratulations, ${userName}!`;
};
