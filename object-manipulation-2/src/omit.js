/* exported omit */
function omit(source, keys) {
  const newObject = {};
  for (const key in source) {
    if (source[key] === undefined) {
      return newObject;
    }
    if (!keys.includes(key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

// same logic as the pick function, with the addition of the bang operator on line 8
// this update makes it so the newObject[key] is assigned the value of the source object's key that is not included within the keys array
