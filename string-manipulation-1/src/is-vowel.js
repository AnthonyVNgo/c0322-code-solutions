/* exported isVowel */
// function isVowel(character) {
//   if ((character === 'a') || (character === 'e') || (character === 'i') || (character === 'o') || (character === 'u') || (character === 'A') || (character === 'E') || (character === 'I') || (character === 'O') || (character === 'U')

//   ) {
//     return true;
//   }
//   return false;
// }

function isVowel(character) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (var i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return true;
    }
  }
  return false;

}

// OH YEAH BABY
