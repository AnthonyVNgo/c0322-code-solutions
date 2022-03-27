/* exported capitalize */
function capitalize(word) {
  var firstLetter = word.slice(0, 1);
  var firstLetterUpperCased = firstLetter.toUpperCase();

  var rest = word.slice(1, word.length);
  var lowercaseRest = rest.toLowerCase();

  return firstLetterUpperCased + lowercaseRest;
}
