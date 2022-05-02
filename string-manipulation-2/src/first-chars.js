/* exported firstChars */
function firstChars(length, string) {
  var firstChars = '';

  if (string === '' && length > 0) {
    return '';
  } else if (length > string.length) {
    firstChars = string.slice(0);
    return firstChars;
  } else {
    firstChars = string.slice(0, length);
    return firstChars;
  }

}

// we want the function to return all the characters of the string even if the length argument is larger than the string.lenght
// we want the function to return '' if the string argument is ''
// we want the function to return whatever given length of chars from the string argument based on the number of the length argument
// we will use conditionals because of the if then structure listed above
// we will use the string.slice() method to make a copy of the string argument at the given length argument
