var x = 34;
var y = 35;
var z = 69;

var maximumValue = Math.max(x, y, z);
console.log('the value of the variable maximumValue:', maximumValue);

var heroes = ['Batman', 'Catman', 'Ratman', 'Scatman-ski-ba-bop-ba-dop-bop'];
console.log('the value of the length method for the array heroes:', heroes.length);

var randomNumber = Math.random();
randomNumber *= heroes.length;
console.log('the value of variable randomNumber *= the length of the array heroes:', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('the value of the floor method of the Math object with the variable randomNumber passed as an argument:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('the value of the variable randomHero, which uses the randomIndex variable as an index to access the array heroes:', randomHero);

//

var library = [
  {
    title: 'The Cat & The Hat',
    author: 'Dr Zeus'
  },

  {
    title: 'Green Eggs and BAM',
    author: 'Emeril'
  },

  {
    title: 'Planet Urf',
    author: 'That British Guy'
  }
];

var lastBook = library.pop();
console.log('the value of the variable lastBook:', lastBook);

var firstBook = library.shift();
console.log('the value of the variable firstBook:', firstBook);

var js = {
  title: 'JS for IPP',
  author: 'Dr. Axel'
};

var css = {
  title: 'CSSSecrets',
  author: 'LV'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('the value of variable library:', library);

//
var fullName = 'Heisenburg White';
var firstAndLastName = fullName.split(' ');
console.log('the value of variable firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
console.log('the value of variable firstName:', firstName);

var sayMyName = firstName.toUpperCase();
console.log('the value of firstName.toUpperCase():', sayMyName);
