/* exported truncate */
function truncate(length, string) {
  // var newString = string.slice(length) + '...';
  // return newString;

  if (length > string.length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }

}
