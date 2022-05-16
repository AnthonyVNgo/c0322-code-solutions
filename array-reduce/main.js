
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

// balance's reducer / callbackFn
const net = (balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  }
  return balance - transaction.amount;
};

const balance = account.reduce(net, 0);

// composites' reducer / callbackFn
const reducer = (prev, current) => {
  return Object.assign(prev, current);
};

const composite = traits.reduce(reducer);

// arrays can use the .reduce() method : array.reduce()
// the .reduce() method takes in two arguments, the callbackFn / reducer and an optional initializer : array.reduce(callbackFn, [initializer])
// the callbackFn / reducer itself takes in two arguments, in our case prevElement and currentElement : array.reduce((prevElement,currentElement) => {}, [initializer])

// if we use the optional initializer -> previousElement = initializer  & currentElement = array[0] on the first call
// // using optional initializer = starting at something other than array[0]
// if we ~use the optional initializer -> previousElement = array[0] & currentElement = array[1] on the first call
// // ~using optional initializer = starting at array[0]
