/* exported getKeys */
function getKeys(object) {
  var keys = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
