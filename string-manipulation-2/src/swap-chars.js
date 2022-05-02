/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {

  var splitString = string.split('');
  // console.log(splitString);

  var firstIndexChar = splitString[firstIndex];
  // console.log(firstIndexChar);

  var secondIndexChar = splitString[secondIndex];
  // console.log(secondIndexChar);

  splitString[firstIndex] = secondIndexChar;
  splitString[secondIndex] = firstIndexChar;

  // var finalString = string.split('');
  // // console.log(finalString);
  // finalString[firstIndex] = secondIndexChar;
  // finalString[secondIndex] = firstIndexChar;

  // for (var i = 0; i < finalString.length; i++) {
  //   var returnstring = finalString[i];
  // }

  return splitString.join('');
}

// we want :
// our code to split the string into characters -> string.split('')
// to access the first index of the new array and assign it to a variable -> var1 = arr[firstIndex]
// to access the second index of the new array and assign it to a variable -> var2 = arr[seocndIndex]
// to re-assign the first index of the new array as the variable containing the second index -> arr[firstIndex] = var2
// to re-assign the second index of the new array as the variable containing the first index -> arr[secondIndex] = var1
// to combine the new array into a new string -> arr.join('')
// to return the new string
