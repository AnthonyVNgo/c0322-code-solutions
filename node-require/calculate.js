const sumFunction = require('./add');
const subtractFunction = require('./subtract');
const multiplyFunction = require('./multiply');
const divideFunction = require('./divide');
const maths = process.argv[3];
const p1 = process.argv[2];
const p2 = process.argv[4];
const stringToNumber = input => { return parseInt(input); };
const p11 = stringToNumber(p1);
const p22 = stringToNumber(p2);

if (maths === 'plus') {
  console.log('result:', sumFunction(p11, p22));
} else if (maths === 'minus') {
  console.log('result:', subtractFunction(p11, p22));
} else if (maths === 'times') {
  console.log('result:', multiplyFunction(p11, p22));
} else if (maths === 'over') {
  console.log('result:', divideFunction(p11, p22));
}
