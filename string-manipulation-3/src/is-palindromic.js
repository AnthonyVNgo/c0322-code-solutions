/* exported isPalindromic */
function isPalindromic(string) {
  // var split1 = string.split('');
  var split2 = string.split('');
  // console.log(split2);

  var reverse = split2.reverse();
  // console.log(reverse);

  var joined = reverse.join('');
  // console.log(joined);
  // console.log(string);

  if (joined === string) {
    return true;
  } else if (joined !== string) {
    return false;
  }
}
