/* exported dropRight */
function dropRight(array, count) {

  return array.slice(0, array.length - count);

}

// we want our code to drop elements from the array starting the count from the end
// so we can use the slice method to begin at 0 and end at the end of the array's length, but minus the count
