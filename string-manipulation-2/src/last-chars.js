/* exported lastChars */
function lastChars(length, string) {
  var sliceIndex = string.length - length;

  if (length > string.length) {
    return string.slice(0);
  } return string.slice(sliceIndex);
}

// we want the function to slice / make a copy of the string
// we want start the string.slice() at the end minus the given length argument
// we want to assign the string.length - length argument to a variable so we can use it for our slice index
// WE DON'T NEED A SECOND ARGUMENT FOR THE SLICE BECAUSE IT'LL GO TO THE END BY DEFAULT YAFOOLIO
