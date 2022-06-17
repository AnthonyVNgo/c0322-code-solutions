/* exported getLength */

function getLength(list) {
  let nextLl = list.next;
  let count = 1;

  while (nextLl !== null) {
    nextLl = nextLl.next;
    count++;
  }
  return count;
}
