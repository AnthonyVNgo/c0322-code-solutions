/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  // list is the head
  // if the head / list.next returns null, then that means there isn't another node in the list
  // nothing happens as expected
  // this takes care of the list if it only contains ONE node

  let prev = list;
  // console.log(prev);
  let next = list.next;
  // console.log(next);
  // console.log(next.next);
  while (next.next !== null) {
    prev = next;
    next = next.next;
  }
  // console.log(prev);
  // console.log(next);
  // console.log(prev.next);
  prev.next = null;
  // prev.next ≠ prev.list.next because we're referencing the property next with the dot, not the variable
  // null is assigned to prev.next, which means the prev (head node) no longer has a second node following after it
  // if prev = list, and list.next returns null, then return list returns

  return list;
}

// the list can be modified, which is why returning / console.log(list) returns a "different" list
// line 11 has a condition statement to check if next.next doesn't return null
// the condition statement checks to see if there's another node following the second node
// there MUST be a second node to check because of the guard placed on line 4 which checks if the list has another node
// if the list has at least a second node, then it is checked again on line 11
// if the list doesn't have a third node, then the while loop is skipped, and
