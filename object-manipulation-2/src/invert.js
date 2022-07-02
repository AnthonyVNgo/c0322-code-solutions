/* exported invert */
function invert(source) {
  const newObject = {};
  for (const keys in source) {
    newObject[source[keys]] = keys;
  }
  return newObject;
}

// line 3. define an empty output object named newObject
// line 4. use a for in loop/statement to loop through the keys in the source object passed as an argument
// line 5. use bracket notation to add the return value of source[keys] (the source object's key/property's value) to the newObject as one of its keys/properties
// line 5. assign keys (the source object's keys) as the value for the newObject's newly added key/property (the newObject's newly added key/property is the source object's key value)
// line 7. return newObject
