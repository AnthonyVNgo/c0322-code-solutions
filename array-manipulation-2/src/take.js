/* exported take */
function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;

}

// we want our code to return a new array with the elements from the array passed in as an argument, with the length of the array equal to the count, starting from the front.
// we can produce the result we want by using the slice method and setting the end point for the slice method as the value passed in from the count argument
// we assign the result of the method being called for the array object to newArray
// we return newArray
