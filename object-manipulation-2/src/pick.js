/* exported pick */
function pick(source, keys) {
  const newObject = {};
  for (const key in source) {
    if (source[key] === undefined) {
      return newObject;
    }
    if (keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// line 3. create an empty output object named newObject
// line 4. use a for in loop to iterate through the properties of the source object passed as an argument
// lines 5-7.
// use an if statement to see if the source object's key value at [key] returns undefined, then return the new empty object, newObject
// because the returned value of undefined means indicates that the source object is an empty object
// lines 8-11.
// use an if statement to see if the keys array includes the value returned from the key variable that is returned from the for in loop
// and assign the source object's key as the newObject's key
// line 12. return newObject
