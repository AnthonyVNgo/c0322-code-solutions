/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (stack.pop() !== undefined) {
    count++;
  }
  return count;
}

// the code should return a count, so the count variable is declared with a value of zero
// the return statement returns the count variable, currently set to 0

// stack.pop() - removes the top value from the stack and returns it
// stack.pop() - returns undefined if there isn't any top values to pop off

// while — loops through a block of code as long as the condition specified evaluates to true.
// line 5 the while loop has a condition that checks if stack.pop() !== undefined
// if (stack.pop() !== undefined) returns true, then the code block runs

// line 6 increments the count

// if using a while loop,
// then make sure that the condition specified in your loop eventually goes false.

// typically a counter and increment occurs and the condition checks the counter,
// but in this exercise, the condition will be met once the stack.pop() is called and returns undefined
// because stack.pop() will return a value and continue to call the .pop() method.
// Once the stack.pop() returns undefined, the condition returns false the while loop stops, and the code on line 8 is returned
