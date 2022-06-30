/* exported intersection */
function intersection(first, second) {
  const outputArr = [];

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      outputArr.push(first[i]);
    }
  }

  for (let j = 0; j < second.length; j++) {
    if (first.includes(second[j])) {
      outputArr.push(second[j]);
    }
  }

  const uniqueSet = new Set(outputArr);
  const backToArr = [...uniqueSet];
  return backToArr;
}

// same logic as union with one additional step

// line 5-9
// use a for loop and check if the second array includes the first array's element at index i, first[i]
// if the second array does include the first array's element, then push the element at index i into the outputArr

// line 11-15
// use a for loop and check if the first array includes the second array's element at index j, first[j]
// if the first array does include the second array's element, then push the element at index j into the outputArr

// line 17. use new Set (outputArr) to remove any duplicated values and assign the returned set object to uniqueSet

// line 18. wrap uniqueSet in an array literal, use the spread operator to get all the values of uniqueSet, and assign the returned value to the variable backToArr

// line 19. return backToArr
