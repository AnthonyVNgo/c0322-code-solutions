/* exported toObject */
// function toObject(keyValuePair) {

//   return keyValuePair[0] + keyValuePair[1];

// }

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];

  return newObject;
}

// function toObject(keyValuePair) {
//   var newObject = {
//     keyValuePair[0] = keyValuePair[1];
//   }
//   return newObject
// }

// why doesn't the above work...?
