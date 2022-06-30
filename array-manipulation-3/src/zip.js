/* exported zip */
function zip(first, second) {
  const mainArr = [];
  if (first.length > second.length) {
    while (first.length !== second.length) {
      first.pop();
    }
  }
  while (second.length !== first.length) {
    second.pop();
  }

  for (let i = 0; i < first.length; i++) {
    mainArr.push([first[i], second[i]]);
  }
  return mainArr;
}

// line 3. declare a variable for the output array, named mainArr for the function to return at the end of its operation
// line 4-8
// include a guard to make the first array the same length as the second array

// line 9-11
// include a guard to make the second array the same length as the first array

// line 13-15
// use a for loop and within its codeblock, push into the mainArr an array that contains the values of the first and second array at index[i]

// line 16. return the output array mainArr
