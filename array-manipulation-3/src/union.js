/* exported union */
function union(first, second) {
  const combinedArr = [...first, ...second];
  // console.log(combinedArr);
  const uniqueSet = new Set(combinedArr);
  // console.log(uniqueSet);
  const backToArr = [...uniqueSet];
  // console.log(backToArr);
  return backToArr;
}
