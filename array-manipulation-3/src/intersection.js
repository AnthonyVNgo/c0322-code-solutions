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
