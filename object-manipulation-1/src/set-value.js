/* exported setValue */
function setValue(object, key, value) {
  object[key] = value;
}

// we want our code to set the value of a property within an object with the object, key, and value arguments passed in the function
// object properties can be assigned by accessing the object's property with dot or bracket notation
// so we're going to use the key argument to access the object's property : object[key]
// we'll then assign the property with whatever is passed in through the value argument
