import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('So, what\'s you name? ');
  return `Hi, ${userName}!`;
};
