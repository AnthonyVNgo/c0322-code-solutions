/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// line 3. include a guard to see if the arrays are equal in length. If they're not equal in length, then instantly return false.

// line 7-11.
// now that the arrays are equal in length, loop through each index to check if each element within the two arrays are equal to eachother
// if the elements at index, [i], are not equal, then return false
// if the loop completes its operations without returning false, then that means that all of the elements within both arrays are equal to eachother,
// and the next line of code executes, which returns true
