/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newLl = new LinkedList(value);
  newLl.next = list;
  return newLl;
}
