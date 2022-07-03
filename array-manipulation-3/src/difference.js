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

// line 3. declare a variable for the output array, named outputArr for the function to return at the end of its operation

// line 4-8
// use a for loop to check if the second array doesn't include elements from the first array
// if the second array doesn't include the element from the first array, then push it into the outputArr

// line 10-14
// use a for loop to check if the first array doesn't include elements from the second array
// if the first array doesn't include the element from the second array, then push it into the outputArr

// line 15
// return outputArr at the end
