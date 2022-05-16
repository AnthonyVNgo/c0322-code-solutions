/* exported chunk */

function chunk(array, size) {
  const newArr = [];
  for (var i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}

// the return = a NEW ARRAY
// create a new empty array (because the return should be a NEW ARRAY and not the original array)
// use the slice method to "return selected elements in an array (array passed in the argument)"
// push the return of the slice method into the newArr
// on the first instance, the slice method will start at 0 & end at the value passed in the size argument
// then on the next instance, the slice method should start at the previous slice method's end point / size argument

// create a for loop
// initialize i = 0
// i = 0 will be where the first instance of the slice begins .slice(0, size)
// set the condition of the for loop to i < array.length because we should only be able to slice at existing indexes
// in the final statement, we add i to size and the result of the expression is assigned to i
// // this allows us to start our slice at the previous end point
// in the code block, use the push method of the newArr object to push the return of array.slice(i, i + size) // array.slice(0, 3) , array.slice(3,6)
