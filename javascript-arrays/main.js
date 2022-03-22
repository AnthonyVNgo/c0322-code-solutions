var colors = ['red', 'white', 'blue'];

console.log('value for the array colors:', colors);

console.log('value for index 0 of the array colors:', colors[0]);
console.log('value for index 1 of the array colors:', colors[1]);
console.log('value for index 2 of the array colors:', colors[2]);

console.log('America is', colors[0] + ',', colors[1] + ', and', colors[2]);

colors[2] = 'green';
console.log(colors);
console.log(colors[2]);

console.log('Mexico is', colors[0] + ',', colors[1] + ', and', colors[2]);

var students = ['batman', 'robin', 'catwoman', 'riddler'];
console.log(students);

var numberOfStudents = students.length;
console.log(numberOfStudents);

var lastIndex = numberOfStudents - 1;
console.log(lastIndex);

var lastStudent = students[lastIndex];
console.log(lastStudent);

console.log(students);
