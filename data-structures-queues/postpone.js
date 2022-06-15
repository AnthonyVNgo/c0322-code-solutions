/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const dequeueValue = queue.dequeue();
    queue.enqueue(dequeueValue);
  }
}
