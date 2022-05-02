/* exported countdown */
function countdown(number) {
  var list = [];
  for (var i = number; i >= 0; i--) {
    list.push(i);
  }
  return list;
}
