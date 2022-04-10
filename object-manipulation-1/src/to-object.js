/* exported toObject */
// function toObject(keyValuePair) {

//   return keyValuePair[0] + keyValuePair[1];

// }

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];

  return newObject;
}

// we want our function to assign the value of the first element from the passed in argument as the object's key/property
// we want our function to assign the value of the seocnd element from the passed in argument's array as the value for the new object's property
// first we create a new object
// then we create the property by using bracket notation on the new object and passing in the first element of the argumnet's array. This will create the property
// object.newproperty = blank
// object[newproperty] = blank
// we then assign the value of the property with the second element of the array that is passed in as an argument
