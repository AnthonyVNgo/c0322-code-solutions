/* exported defaults */
function defaults(target, source) {
  for (const keys in source) {
    if (!Object.keys(target).includes(keys)) {
      target[keys] = source[keys];
    }
  }
}

// if target doesn't include properties from source, then add the source properties into the target object
// add property with bracket notation
// // console.log(`${keys} not included`);

// line 3. use a for in loop/statement to loop through the keys in the source SVGForeignObjectElement
// line 4. use a condition statement, Object.keys(), and includes(), to check if the target object's keys (extracted with the Object.keys method and returns an array of the object's keys)
// does not include the keys from the source object
// line 5. if the target object does not include the keys from the source object, then use bracket notation to add the key [keys] to the target object and assign it the value of the return of the source object's key [key]
