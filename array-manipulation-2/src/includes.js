/* exported includes */

function includes(array, value) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  if (i === array.length) {
    return false;
  }

  if (i === 0) {
    return false;
  }
}
