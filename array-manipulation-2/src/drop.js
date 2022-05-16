/* exported drop */
function drop(array, count) {
  var newArr = array.slice(count);
  return newArr;
}

// the slice method returns a new array based on the start and end point, so to "drop" the first few elements or keep the last few elements, we can simply start the slice based on the value of the count argument
// if we set the slice method's starting point at count, then we will have a new array minus the array elements that we're trying to drop.
