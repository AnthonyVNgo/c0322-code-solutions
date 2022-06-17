/* exported getTail */

function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}

// list.next has two outcomes
// list.next returns the next node if there is another node in the list
// list.next returns null if there isn't a following node
// list.data returns the node's value
// while the return of list.next is not strictly equal to null (which indicates that there's another node),
// assign the next node to list
// repeat line 14 by checking the condition if list (the following node) .next is not strictly equal to null
// line 14-16 repeats until the node / list.next returns null
// the while loop has iterated until list.next returns null, which indicates that the tail has been reached
// if the tail has been reach, then list.data should return the last value
// line 7 returns the last value
