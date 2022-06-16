/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }

  const firstdata = list.data;
  const seconddata = list.next.data;
  if (list.next !== null) {
    list.data = seconddata;
    list.next.data = firstdata;
    return list;
  }
}
