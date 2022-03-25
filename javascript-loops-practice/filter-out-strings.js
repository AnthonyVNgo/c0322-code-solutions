/* exported filterOutStrings */
function filterOutStrings(values) {

  var noStrings = [];

  for (var i = 0; i < values.length; i++) {

    if (typeof values[i] === 'number') {
      noStrings.push(values[i]);
    }

  }

  return noStrings;

}

// we want our code to check if the array passed in as an argument contains elements that are strings or numbers. if our array contains elements that are numbers, then we push them into our new array.
// create a new empty array to contain our new array minu strings
// create a condition to check if our element[i] === typeof 'number'
// use .push(values[i]) on our new array object
// return our new array
