const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(element => (element % 2) === 0);
const overFive = numbers.filter(element => element > 5);
const startWithE = names.filter(element => element[0] === 'E');
const haveD = names.filter(element => element.includes('d') || element.includes('D'));
