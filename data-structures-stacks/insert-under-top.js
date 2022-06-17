/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return;
  const top = stack.pop();
  stack.push(value);
  stack.push(top);

}

// line 5 pops off the top value and stores it for later use
// think of it as the sandwich top, the sandwich is now open brah

// line 6 pushes the value into the sandwich stack
// line 7 we put the sandwich top back on top brah
// nomnomnonmonmnomnomnonmonmnomnonmo
