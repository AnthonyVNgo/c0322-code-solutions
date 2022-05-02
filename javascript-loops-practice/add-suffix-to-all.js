/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var allWords = [];

  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    allWords.push(newWord);
  }
  return allWords;
}
