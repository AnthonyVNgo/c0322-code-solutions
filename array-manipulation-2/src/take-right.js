/* exported takeRight */
function takeRight(array, count) {
  // console.log('array value:', array);
  // console.log('count value:', count);
  // console.log('array[count] value:', array[count]);

  if (count > array.length) {
    return array;
  }
  return array.slice(array.length - count);
}

// we want our code to return A new Array containing the last count elements of array.
// If the count is larger than the length of the array, then a shallow copy of the entire array is returned.
// we will use the .slice() method of the array object
// the slice method returns the values between the starting point and the end of the array by default if no end argument is entered
// we want to start slicing counting back from the end of the array
// to do this, we would use the array.length property to get the length of the array
// then we use the count to subtract from the array.length, which should give us the starting position for our slice method

// if the count is larger than our array length, then we'll just return the entire array, no extra work necessary
