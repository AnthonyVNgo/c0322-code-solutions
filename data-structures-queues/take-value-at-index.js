/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  let count = 0;
  while (count < index) {
    const dq = queue.dequeue();
    queue.enqueue(dq);
    count++;
    if (count === index) {
      return queue.dequeue();
    }
  }
}
