/* exported unique */
function unique(array) {
  const uniqueSet = new Set(array);
  const setToArray = [...uniqueSet];
  return setToArray;
}

// parameters: array - takes an javascript array as an argument
// returns A new Array containing only the unique elements of array, in the order they first appear in array.

// Set is a new data object introduced in ES6.
// Because Set only lets you store unique values,
// When you pass in an array, it will remove any duplicate values.

// console.log(typeof uniqueSet) // returns object

// new Set(array) returns an object
// the objects key/values are equal to eachother which is why the return looks like: {1,3,2,5,4}
// the object contains all of the unique elements of the array as object

// line 3. Set creates an object with the unique elements of the array
// line 3. the object's key/value pairs are equal to eachother (think object destructuring) {key:key} === {key}
// line 4. the spread operator gets all of the values from the Set object's property/values and has them placed inside the array literal
// line 4. the array literal containing the Set object's key/value is assigned to the setToArray variable
// line 5. the variable setToArray is returned
