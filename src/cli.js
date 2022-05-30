import readlineSync from 'readline-sync';

export default (gameName) => {
  console.log(`${gameName}\nWelcome to the Brain Games!`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
