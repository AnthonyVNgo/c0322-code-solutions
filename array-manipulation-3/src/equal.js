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

// include a guard to see if the array passed as an argument for the first parameter is
// the same length as the array passed as an argument for the second parameter

// if the first array's length isn't equal to the second, then return false because we'd know that
// the arrays are inherently different due to length

// if the arrays are equal in length, then check both the array's elements and see if they're equal to eachother by using a for loop

// if the elements are not equal to each other, then return false

// if the elements are equal to eachother, then the variable i increments in the for loops final expression and the loop continues to check the next element in both the arrays through bracket the use of bracket notation on the array first[i] & second[i]

// if the for loop completes its operation of checking whether the two array elements are equal to each other and does not return false during any iteration, then return true
