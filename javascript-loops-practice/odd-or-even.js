/* exported oddOrEven */

function oddOrEven(numbers) {

  var list = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      list.push('even');
    } else {
      list.push('odd');
    }
  }
  return list;

}

// check if numbers in the numbers parameter are odd or even
// if the numbers are even, convert them to the string 'even'
// if the numbers are odd, convert them to the string 'odd'
