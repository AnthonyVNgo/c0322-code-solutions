/* exported getValue */
function getValue(object, key) {
  return object[key];
}

// var cat = {
//   name: 'rat'
// };

// why does dot notation not work for this question if the question doesn't ask for multiword properties?
// function getValue(object, key) {
//   return object.key;

// }

// above doens't work because js expects a property literally named 'key' when using dot notation.
// the property named 'key' doesn't exist, which is why the log returns undefined (key: undefined).
// The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variable.

// console.log(cat.name);
// console.log(getValue(cat, name));
// console.log(cat.name);
