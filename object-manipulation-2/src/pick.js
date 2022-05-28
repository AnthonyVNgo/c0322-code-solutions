/* exported pick */
function pick(source, keys) {
  var output = {};

  // console.log(source);
  // console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source) {
      output[`${keys[i]}`] = source[`${keys[i]}`];
    }
  }
  // console.log(output);
  return output;
}

// the function takes in an object passed in through the source argument
// the function takes in properties passed in through the keys argument
// the function will return any matching keys from the passed argument and object
