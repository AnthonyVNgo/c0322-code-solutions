const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previousElement, currentElement) => {
  return previousElement + currentElement;
});

const product = numbers.reduce((previousElement, currentElement) => {
  return previousElement * currentElement;
});

// net = callbackFn || reducer
// net goes within reduce(reducer, init)
const net = (balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  }
  return balance - transaction.amount;
};

const balance = account.reduce(net, 0);

// const initialValue = 0;
// const balance2 = account.reduce((previousElement, currentElement) => {
//   if (currentElement.type === 'deposit') {
//     return previousElement + currentElement.amount;
//   }
//   return previousElement - currentElement.amount;
// }
// , initialValue);
// console.log('balance2', balance2);
