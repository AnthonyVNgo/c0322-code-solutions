const takeAChance = require('./take-a-chance');

const promise = takeAChance('anthony');

// promise.then(message => {
//   console.log(message);
// });

// promise.catch(error => {
//   console.log(error.message);
// });

const fulfilledCB = message => {
  console.log(message);
};

const rejectedCB = error => {
  console.log(error.message);
};

promise.then(fulfilledCB, rejectedCB);
