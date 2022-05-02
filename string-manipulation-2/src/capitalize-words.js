/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitString = string.split(' ');
  var newWord = '';
  var newString = '';

  for (var i = 0; i < splitString.length; i++) {
    var firstChar = splitString[i].slice(0, 1).toUpperCase();

    var remainingChar = splitString[i].slice(1).toLowerCase();

    newWord = firstChar + remainingChar;

    newString += newWord + ' ';

  }

  return newString.slice(0, newString.length - 1);
}
