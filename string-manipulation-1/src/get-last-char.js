/* exported getLastChar */
function getLastChar(string) {
  var lastChar = string[string.length - 1];
  return lastChar;
}

// we want our code to do the same thing as our previous task, but with the last char from a string instead of the first char from a string
// to access the last char of a string, we'd use the .length property
// but because the .length property provides a length that is 1 indexed instead of 0 indexed, we need to subtract 1 from the return value.
// after subtracting 1 from the length of the string, we should be able to access the last character of the string according to 0 based indexing.
// we then assign the return value of string.length - 1 to a new variable
// we then return the value of the variable which will give us the result that we are lookign for
