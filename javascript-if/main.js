/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if ((person.age >= 21) && (person.age >= 16)) {
    return false;
  } else {
    return false;
  }
}

// redo
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'is neutral';
  } else if ((pH < 7) && (pH > 0)) {
    return 'is acid';
  } else if ((pH < 14) && (pH > 7)) {
    return 'is based - liLB';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the Warner Brotheres!";
  } else if (name === 'dot') {
    return "I'm cute";
  } else {
    return 'Goodnight everybody';
  }
}