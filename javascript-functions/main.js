// 1

function convertMinutesToSeconds(minutes) {
  var minute = 60;
  return (minutes * minute);
}

console.log(convertMinutesToSeconds(5));

// 2

function greet(name) {
  console.log('Hey,', name);
}

greet('Beavis');

// 3

function getArea(w, h) {
  var area = (w * h);
  return area;
}

console.log(getArea(17, 42));

// 4

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

// 5

function getLastElement(array) {
  var arrayLength = array.length - 1;
  return array[arrayLength];
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
