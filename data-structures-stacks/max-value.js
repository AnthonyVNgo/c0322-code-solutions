/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;

  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop());
  }
  return max;

}
// console.log(Infinity);
// if (stack.peek() === undefined) return -Infinity;

// line 4 initializes max at -Infinity (think of it as like initializing at 0 for plain JS max algorithm)
// if stack is empty, then return -Infinity (max). Again, can think of it as 0 from max algo

// code in line 7 runs as long as condition in line 6 returns true
// stack.peek() returns a value unless the stack is empty / popped off
// if the stack is empty / popped off, it returns undefined
// if the stack returns undefined,
// then the condition statement returns false,
// then the code block stops,
// then the return statement runs

// The Math.max() function
// returns the largest of the zero or more numbers given as input parameters

// max / -Infinity is compared with stack.pop()
// the return of Math.max (the higher of the two returned values) assigned to max
// the stack is simultaneously popping off items from the stack (which eventually leads to condition returning false, which ends the loop and prevents an infinite loop)
// the stack.pop() on line 7 is critical because it returns values from the stack, and stops the while loop
