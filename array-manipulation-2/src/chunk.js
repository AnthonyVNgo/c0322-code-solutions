/* exported chunk */

function chunk(array, size) {
  var mainArr = [];

  for (var i = 0; i < array.length; i++) {

    if (i === 0) {
      mainArr.push(array.slice(i, i + size));
    } else if (size === 1) {
      mainArr.push(array.slice(i, i + size));
    } else if (i === size) {
      mainArr.push(array.slice(i, i + size));
    } else if (i === size * 2) {
      mainArr.push(array.slice(i, i + size));
    }
  }
  return mainArr;

}

// .slice(i, i+size)
// if (array.length % size === 0) {

// we want the code to create a new array using the elements from the array argument
// we want the code to create array chunks based on the value of the size argument
