/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return;
  const top = stack.pop();
  const peekIntoCookieJar = stack.peek();
  stack.push(top);
  return peekIntoCookieJar;
}

// same logic from insert under top except the code should not insert any new values
// the code should also not modify the list and take the second value with a pop()
// using peek returns the top item, which in this case is now the second item because the first item was popped off with stack.pop()
// the returned value of stack.peek() is stored for reference later in the return statement
// the top is pushed back on top via stack.push(top)
// now the return statement containing the value returned from stack.peek() can be used to end the operations and return the expected value
