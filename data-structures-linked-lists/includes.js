/* exported includes */

function includes(list, value) {
  while (list !== null) {
    if (list.data === value) return true;
    list = list.next;
  }
  return false;
}

// on line 4, the loop runs while the condition (list !== null) returns true
// if the condition returns true, then the code on line 6 runs
// the code on line 6 re-assigns the value of list to the return of the next property of list
// the code on line 6 is what allows the while loop to continue
// if the code on line 6 didn't exist, then an infinite loop would occur because the condition (list !== null) will return true and run the code block
// though not necessary, can be confirmed by commenting out line 6

// because line 6 allows for the loop to go through the list,
// all that needs to be done now is to check
// if the data (list.data) returns a value that matches
// the value passed as an argument
