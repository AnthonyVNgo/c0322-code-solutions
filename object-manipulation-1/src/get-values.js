/* exported getValues */
function getValues(object) {
  var values = [];

  for (const keys in object) {
    values.push(object[keys]);
  }

  return values;

}

// we want our code to repeat the same function from the previous task
// we then want our code to use the value returned from the for in loop (the object's properties) to access the property values
// because to access the object's property value, we need to know which property to target and access. This is done with the for in loop which returns the value of the properties
// we then want to loop through our object for each property (which was returned and assigned to the keys var) and return the value of the value of the object's key(property) / value pair
// we push each of the values into an array
// return the array
