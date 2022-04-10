/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0];
  var firstLetterUpperCased = firstLetter.toUpperCase();

  var rest = word.slice(1);
  var lowercaseRest = rest.toLowerCase();

  return firstLetterUpperCased + lowercaseRest;
}

// we want our code to capitalize the first character of a string passed in as an argument "word"
// we can capitalize the first char by using bracket notation to access the first char of the string
// we can then capitalize the first char by using the toUpperCase() method
// we then assign this value to a variable (which we will concatenate to the rest of the string)
// we then lowercase the rest of the string by first making a copy of the remaining string from 1 onwards by using the slice method
// we then use the toLowercase() method to lowercase the remaining chars and assign them to a variable
// finally we combine the two variables, the uppercase first char and lowercase remainder via string concatenation and return the value
