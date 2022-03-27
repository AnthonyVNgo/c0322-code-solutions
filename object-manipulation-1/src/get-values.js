/* exported getValues */
function getValues(object) {
  var values = [];

  for (const keys in object) {
    values.push(object[keys]);
  }

  return values;

}
