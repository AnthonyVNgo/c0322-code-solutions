/* exported chunk */
// function chunk(array, size) {

//   var i = 0;

//   if (i / size !== 1) {
//     i++;
//   } else if (i / size === 1) {
//     return array.slice(0, i);
//   }
// }

// var newArr = [];
// console.log(newArr.length);
// newArr[newArr.length] = ['foo', 'bar', 'baz'];
// console.log(newArr);
// console.log(newArr.length);

// var oldArr = ['foo', 'bar', 'baz', 'qux'];

// console.log(oldArr.length);
// console.log(oldArr);
// oldArr[oldArr.length] = 'quax';
// console.log(oldArr);

// function chunk(array, size) {
//   var mainArr = [];
//   var subArr = [];
//   // then subArr = new value, "push" into mainArr, then loop, then subArr is reassigned a new value again etc

//   for (var i = 0; i < array.length; i++) {
//     var counter = i + 1;

//     if (counter === size) {
//       subArr[subArr.length] = array.slice(i, size);
//       // console.log(subArr);
//       mainArr[mainArr.length] = subArr[subArr.length] = array.slice(i, size);
//       // console.log(mainArr);
//     }
//   }
//   return mainArr;

// }

var i = 0;

var array = [1, 2, 3, 4, 5];
var count = 1;

var subArr = [];
subArr[subArr.length] = array.slice(i, i + count);
// console.log(subArr);

var mainArr = [];
mainArr[mainArr.length] = subArr;
// console.log(mainArr);

i = 1;
subArr = array.slice(i, i + count);
// console.log(subArr);

mainArr[mainArr.length] = subArr;
// console.log(mainArr);
