/* exported reverse */
function reverse(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }

  return newArray;

}

// we want our code to reverse the array passed in as an argument
// we first create an array and assign it to a new variable (var newArray)
// we can then create a for loop to loop through the elements within the array passed in as an argument
// instead of pushing the elements from the argument, we can unshift the elements. This should place older elements towards the end and newer elements in front
// finally we can return the newArray
