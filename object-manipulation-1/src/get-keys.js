/* exported getKeys */
function getKeys(object) {
  var keys = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

// we want our code to get the key(property) of an object which will be passed as an argument for the function
// we're going to use the for in loop to gather the properties of the object and assign it to the variable key (shoulda used a less confusing variable name)
// we then push the value of the key variable (property) into the keys array with each iteration of the loop
// finally we return the value of the keys array
