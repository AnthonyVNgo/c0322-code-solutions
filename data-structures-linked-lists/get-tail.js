/* exported getTail */

function getTail(list) {
  if (list.next === null) {
    // console.log(list.data);
    return list.data;
  }

  let nextLl = list.next;
  while (nextLl.next !== null) {
    nextLl = nextLl.next;
    if (nextLl.next === null) {
      // console.log(nextLl.data);
      return nextLl.data;
    }
  }
}
