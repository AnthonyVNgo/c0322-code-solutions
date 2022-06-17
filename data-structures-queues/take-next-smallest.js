/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  let second = queue.peek();

  while (first > second) {
    queue.enqueue(first);
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}
