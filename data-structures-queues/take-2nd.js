/* exported take2nd */

function take2nd(queue) {
  // queue.dequeue();
  if (queue.peek() === undefined) {
    return undefined;
  }

  const dequeueValue = queue.dequeue();
  queue.enqueue(dequeueValue);
  // console.log(queue.dequeue());
  return queue.dequeue();
}
