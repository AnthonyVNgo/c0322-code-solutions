/* exported union */
function union(first, second) {
  const combinedArr = [...first, ...second];
  const uniqueSet = new Set(combinedArr);
  const backToArr = [...uniqueSet];

  return backToArr;
}

// line 3. use the spread operator, ..., to combine the elements from the first array and the second array and assign it to a variable combinedArr

// line 4. use new Set(combinedArr) to remove all of the duplicate values within the array via creation of new Set object and assign the return object and key-value pairs to the variable uniqueSet

// line 5. use the spread operator again to get all of the values from the set object uniqueSet and wrap them within an array literal and assign the array to the variable backToArr

// line 7. return backToArr
