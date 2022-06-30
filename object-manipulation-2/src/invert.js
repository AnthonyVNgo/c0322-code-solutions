/* exported invert */

function invert(source) {
  const newObject = {};
  for (const keys in source) {
    newObject[source[keys]] = keys;
  }
  return newObject;
}
