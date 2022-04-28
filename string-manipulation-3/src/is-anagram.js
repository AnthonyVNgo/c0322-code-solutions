/* exported isAnagram */
// function isAnagram(firstString, secondString) {
//   var firstStringArr = firstString.split('');
//   var secondStringArr = secondString.split('');

//   var firstStringArrSorted = firstStringArr.sort();
//   var secondStringArrSorted = secondStringArr.sort();

//   var firstStringResults = firstStringArrSorted.filter(removeSpaces);
//   var secondStringResults = secondStringArrSorted.filter(removeSpaces);

//   if (firstStringResults === secondStringResults) {
//     return true;
//   }
// }

// function removeSpaces(chars) {
//   return chars !== ' ';
// }

function isAnagram(firstString, secondString) {
  // console.log(removeSpaces(firstString));
  // console.log(removeSpaces(secondString));
  // console.log(removeSpaces(firstString).length);
  // console.log(removeSpaces(secondString).length);
  var x = sortString(removeSpaces(firstString)).join();
  var y = sortString(removeSpaces(secondString)).join();

  if (x === y) {
    return true;
  } else {
    return false;
  }

  // if (removeSpaces(firstString).length !== removeSpaces(secondString).length) {
  //   return false;
  // }

}

function removeSpaces(string) {
  var stringWithoutSpaces = string.replace(' ', '');
  return stringWithoutSpaces;
}

function sortString(string) {
  var splitStringIntoArray = string.split('');
  var sortedArrayIntoString = splitStringIntoArray.sort();
  return sortedArrayIntoString;
}

// if (removeSpaces(firstString).length !== removeSpaces(secondString.length)) {
//   return false;
