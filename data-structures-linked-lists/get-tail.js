/* exported getTail */

function getTail(list) {
  // if (list.next === null) {
  //   return list.data;
  // }

  // let nextLl = list.next;
  // while (nextLl !== null) {
  //   nextLl = nextLl.next;
  // }
  // if (nextLl === null) {
  //   // console.log(nextLl);
  //   console.log(nextLl.data);
  //   // return nextLl;
  // }
  while (list.next) list = list.next;
  return list.data;
}
