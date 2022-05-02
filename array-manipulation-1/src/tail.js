/* exported tail */
function tail(array) {

  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;

}
// we want our code to return all except the first array element
// we could use slice, but that method is banned
// so instead we can for loop through the array and start at index 1 instead of index 0
// we can then push each element with each iteration of the loop until the loop reaches the length of the array
