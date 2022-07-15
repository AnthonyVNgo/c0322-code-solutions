/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  while (list.next) list = list.next;
  list.next = new LinkedList(value);
}
// the same logic from get-getTail.js applies to this exercise, except for the creation of a new LinkedList()
// once the tail has been reached and assigned to the variable list, a new LinkedList is assigned to the list.next property
// the new LinkedList is the next node in the list
// console.log(list.next) // returns dirt
