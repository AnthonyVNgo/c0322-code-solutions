/* exported findIndex */
function findIndex(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;

}

// create code to check if the  array passed into the array parameter contains the value stored within the value parameneter
// create a for loop to check if array[i] === value
// if array[i] === value, return the variable i
