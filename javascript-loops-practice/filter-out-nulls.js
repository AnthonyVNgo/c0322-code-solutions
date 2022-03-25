/* exported filterOutNulls */
function filterOutNulls(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// We want the code to check if an element in the array is null. If the element is null, then we want to ignore it "filter it". If it is not null, then we want to return it.
// create a new empty array to store the new values minus null
// create a for loop with i initialized at 0, the condition to run the length of the array, and to increment as the final expression
// create a condition to check if an element[i] is null. if element[i] is null, then nothing happens. if element[i] is !null, then we .push(element[i]) into our new array that we will return
// create a return assigned the value of our new array of elements minus null
