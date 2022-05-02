/* exported initial */
function initial(array) {

  var newArray = [];

  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// we want our code to return all elements within the array except for the last element
// so we can run a for loop and stop it beore it reaches the last array element
