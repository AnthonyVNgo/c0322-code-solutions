/* exported capitalizeWord */
// function capitalizeWord(word) {
//   var capFirst = word.slice(0, 1);
//   var rest = word.slice(1);
//   var newWord = capFirst + rest;

//   if (newWord === 'Javascript') {
//     return 'JavaScript';
//   } else {
//     return newWord;
//   }
// }

// // console.log(capitalizeWords('sTRING'));

function capitalizeWord(word) {
  var firstLetter = word.slice(0, 1).toUpperCase();
  var rest = word.slice(1).toLowerCase();
  var newString = firstLetter + rest;

  if (newString === 'Javascript') {
    return 'JavaScript';
  } else {
    return newString;
  }
}
