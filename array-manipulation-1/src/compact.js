/* exported compact */
function compact(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }

  return newArray;

}

// we want our function to omit all elements falsey values
// so we can use a conditional statement to see if the elements within the array are truthy
// we can check if an element is truth by writing the if statement if(var) which checks if the var is truthy
// if the var is truthy, then we run our code and push the var into a new array
// we can ignore falsey elements
