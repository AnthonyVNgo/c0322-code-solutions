/* exported isAnagram */
function removeSpaces(string) {
  var stringWithoutSpaces = string.replace(/ /g, '');
  return stringWithoutSpaces;
}

function sortString(string) {
  var splitStringIntoArray = string.split('');
  var sortedArrayIntoString = splitStringIntoArray.sort();
  return sortedArrayIntoString;
}

function isAnagram(firstString, secondString) {
  var x = sortString(removeSpaces(firstString)).join();
  var y = sortString(removeSpaces(secondString)).join();
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
