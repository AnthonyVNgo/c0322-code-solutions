/* exported difference */
function difference(first, second) {
  const outputArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      outputArr.push(first[i]);
    }
  }

  for (let j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      outputArr.push(second[j]);
    }
  }
  return outputArr;
}

// A new Array containing the symmetric difference between first and second.
// That is, elements are included if they are found in one Array,
// but not the other.
// The result values are unqiue and
// their order is determined by the order they occur.

// can i use set again to get unique values?
