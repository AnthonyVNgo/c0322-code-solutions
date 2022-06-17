/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  // list is the head
  // if the head / list.next returns null, then that means there isn't another node in the list
  // nothing happens as expected
  // this takes care of the list if it only contains ONE node

  let prev = list;
  let next = list.next;
  while (next.next !== null) {
    prev = next;
    next = next.next;
  }
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
// on line 12, the condition statement for the while loop checks if the return of next.next (the third node) is not strictly equal to null
// the condition statement begins at the next.next (the second node) because we want to end before we reach the tail, where prev.next returns null
// we want to access the second to last node and set its next to null to remove the last node

// returns nothing if there's 1 node
// returns 1 node if there's 2 nodes
// returns whatever amount after 2+ nodes
