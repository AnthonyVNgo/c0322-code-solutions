/* exported zip */
function zip(first, second) {
  const mainArr = [];
  const newArr = [];
  const masterArr = [];

  for (var i = 0; i < first.length; i++) {
    newArr.push(first[i], second[i]);
  }
  // console.log(newArr);

  // console.log(newArr.slice(0, 2));

  for (var j = 0; j < newArr.length; j++) {
    mainArr.push(newArr.slice(j, j + 2));
    // j++;
    // console.log(j);
  }

  // console.log(mainArr);

  for (var k = 0; k < mainArr.length; k++) {
    masterArr.push(mainArr[k]);
  }

  return masterArr;

}
