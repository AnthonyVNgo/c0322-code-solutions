/* exported getWords */
// function getWords(string) {
//   var array = string.split(' ');
//   return array;
// }

// the above didn't account for if (KEYWORD IF, always think try to catch yourself to see if you use the word if in your description because that means you'll use a conditional) the string was ''

// create a function that first check if a string is passed in as an argument
// if a string is passed in as an argument, then we can use the split method string.split(' ') to split the string of words based on the spaces and assign them to a new variable
// what does capital String mean ?

function getWords(string) {
  if (string === '') {
    return [];
  } else if (typeof string === 'string') {
    return string.split(' ');
  }
}
