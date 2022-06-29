/* exported flatten */
function flatten(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// return a NEW array // newArray
// test whether a value is an array with Array.isArray
// test whether each element in the array is an array with Array.isArray

// if the element in the array, array[i], is not an array, push it into the new array newArray
// if the elemnt in the array, array[i], is an array, then loop through the array and push the elements into the new array newArray
