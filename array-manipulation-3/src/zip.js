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

// create an output array to use as the function's return value
// make the arrays equal in length to avoid dealing with uneven subarrays / complications
// push the subarray containing the first elements from both the first and second array into the output array, mainArr
// return the output array, mainArr
