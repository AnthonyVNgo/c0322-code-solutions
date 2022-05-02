
// 3i
var arr = [
  {
    isbn: '1',
    title: 'First Book',
    author: 'First Author'
  },

  {
    isbn: '2',
    title: 'Second Book',
    author: 'Second Author'
  },

  {
    isbn: '3',
    title: 'Third Book',
    author: 'Third Author'
  }
];

console.log('this is the value of the variable arr:', arr);
console.log('this is the value of typeof arr:', typeof arr);

// 3ii
var stringified = JSON.stringify(arr);
console.log('this is the value of the variable stringified:', stringified);
console.log('this is the value of typeof variable stringified:', typeof stringified);

// 3iii

// {
// "numberID": 1,
// "name": "Jason"
// }

// var stringJSON = {
//   "numberID": 1,
//   "name": "Jason"
// }

// var jstring2 = '{"numberID": 1,"name": "Jason"}';

var jString = '{ "numberID": "1", "name": "jason" }';
console.log(jString);

// var jString = { numberID: '1', name: 'jason' };
// console.log(jString);

// JSON is purely a string with a specified data format — it contains only properties, no methods.
// JSON requires double quotes to be used around strings and property names.Single quotes are not valid other than surrounding the entire JSON string.

var jsObject = JSON.parse(jString);
console.log(jsObject);
