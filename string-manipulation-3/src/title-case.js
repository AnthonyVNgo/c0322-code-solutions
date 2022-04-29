/* exported titleCase */
// function titleCase(title) {
//   // return capitalizeWords(title);
//   // console.log(capitalizeWords(title));
//   // capitalizeWords(title).replace('And', 'and').replace('Or', 'or').replace();

//   var lowerCaseInput = title.toLowerCase();
//   var inputLowerCasedSplit = lowerCaseInput.split(' ');

//   capitalizeWord(inputLowerCasedSplit[0]);
//   // console.log(capitalizeWord(inputLowerCasedSplit[0]));

//   console.log(capitalizeWords(title));
// }

// /*

// capitalize character at first index
// if word/string = and, or, nor, but, a, an, the, as, at, by, for, in, of, on, per, to, then they will be lowercase
// but if the previous list of words are first, then they will be capitalized

// 1. split the string passed in as an argument with the separator being ' ', creating a new array containing the values of the string separated by the space
// 2. assign the new array to a variable so we can manipulate it
// 3. capitalize the first letter of the first array element regardless of what word it is
// 4. slice first letter
// 5. capitalize first letter
// 6. slice chars after first letter
// 7. lowercase remaining letters
// 8. concatenate

// . create a for loop initialized at 1 (the second array element), set the condition expression to the

// */

// function capitalizeWord(word) {
//   var firstLetter = word.slice(0, 1).toUpperCase();
//   var rest = word.slice(1).toLowerCase();
//   var newString = firstLetter + rest;

//   if (newString === 'Javascript') {
//     return 'JavaScript';
//   } else {
//     return newString;
//   }
// }

// function capitalizeWords(input) {
//   for (var i = 1; i < input.length; i++) {

//     if (input !== 'and' || input !== 'or' || input !== 'nor' ||
//       input !== 'but' || input !== 'a' || input !== 'an' ||
//       input !== 'the' || input !== 'as' || input !== 'at' ||
//       input !== 'by' || input !== 'for' || input !== 'in' ||
//       input !== 'of' || input !== 'on' || input !== 'per' ||
//       input !== 'to' || input !== 'then') {

//       var firstChar = input.slice(0, 1).toUpperCase();
//       var remainingChar = input.slice(1).toLowerCase();

//       newWord = firstChar + remainingChar;
//       newString += newWord + ' ';
//     }
//   }
//   return newString.slice(0, newString.length - 1);
// }

// // function lowerCaseMinorWords(input) {
// //   if (input !== 'and' || input !== 'or' || input !== 'nor' ||
// //     input !== 'but' || input !== 'a' || input !== 'an' ||
// //     input !== 'the' || input !== 'as' || input !== 'at' ||
// //     input !== 'by' || input !== 'for' || input !== 'in' ||
// //     input !== 'of' || input !== 'on' || input !== 'per' ||
// //     input !== 'to' || input !== 'then') {
// //     // console.log('detected input value: ' + input);
// //     input.toLowerCase();
// //   }
// // }

// // function capitalizeWords(string) {
// //   var splitString = string.split(' ');
// //   var newWord = '';
// //   var newString = '';

// //   for (var i = 0; i < splitString.length; i++) {
// //     var firstChar = splitString[i].slice(0, 1).toUpperCase();
// //     var remainingChar = splitString[i].slice(1).toLowerCase();

// //     newWord = firstChar + remainingChar;
// //     newString += newWord + ' ';
// //   }

// //   return newString.slice(0, newString.length - 1);
// // }
