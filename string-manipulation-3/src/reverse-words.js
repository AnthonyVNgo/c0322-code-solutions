/* exported reverseWords */
function reverseWords(string) {
  // var x = string.split('');
  // console.log(x);
  // var y = x.reverse();
  // console.log(y);
  // var z = y.join('');
  // console.log(z);
  // var a = z.split(' ');
  // console.log(a);

  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
