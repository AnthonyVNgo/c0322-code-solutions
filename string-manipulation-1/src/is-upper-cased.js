/* exported isUpperCased */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}

// we want the code to return a boolean value, which means we'll probably use a logical operator
// we want to know if the word passed in as an argument is all uppercase
// so we would check if the word === word.toUpperCase()
// if it is, then return true, else return false
