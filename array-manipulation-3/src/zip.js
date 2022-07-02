/* exported zip */
function zip(first, second) {
  const mainArr = [];
  const length = Math.min(first.length, second.length);
  for (let i = 0; i < length; i++) {
    mainArr.push([first[i], second[i]]);
  }
  return mainArr;
}

// line 4. use Math.min to return the lowest value passed in as its arguments
// line 5. use a for loop to iterate through the length of the length variable
// line 6. push into the mainArr the elements from the first and second array at index [i]
// line 8. return the mainArr variable/array
