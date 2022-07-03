/* exported flatten */
function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      newArray.push(array[i]);
    }

    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
}

// line 3. declare a variable for the output array, named newArray for the function to return at the end of its operation
// lines 4-7
// use a for loop to check if the array's elements are arrays || !array
// if the array's element is not an array, then push it into the newArray
// if the array's element is an array, then use a for loop to push the nested array's elements into the output array, newArray
// return the output array, newArray
