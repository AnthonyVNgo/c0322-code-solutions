/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const nextll = list.next;
  const newll = new LinkedList(value);
  list.next = newll;
  newll.next = nextll;
  return list;
}
