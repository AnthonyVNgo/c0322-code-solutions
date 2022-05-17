/* exported isPalindromic */
function isPalindromic(string) {
  var trimmed = string.replace(' ', '');
  var split2 = trimmed.split('');

  var reverse = split2.reverse();
  var joined = reverse.join('');

  if (joined === trimmed) {
    return true;
  } else if (joined !== trimmed) {
    return false;
  }
}
