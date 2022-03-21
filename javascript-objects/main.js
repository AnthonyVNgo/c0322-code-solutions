var student = {
  firstName: 'Johnny',
  lastName: 'Bravo',
  age: 21
};

console.log('value of the object student:', student);

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
console.log('value of the livesInIrvine property for the object student :', student.livesInIrvine);

student.previousOccupation = 'jiggalo';
console.log('value of the previousOccupation property for the object student:', student.previousOccupation);

var vehicle = {
  make: 'Mazda',
  model: 'Miata',
  year: 1994
};

console.log('value of the object vehicle:', vehicle);
vehicle['color'] = 'red';
console.log('value of the object vehicle:', vehicle);
vehicle['isConvertible'] = true;
console.log('value of the object vehicle', vehicle);

var pet = {
  name: 'peanut',
  type: 'dog'
};

console.log('value of the object pet:', pet);

delete pet.name;
delete pet.type;

console.log('value of the object pet:', pet);
