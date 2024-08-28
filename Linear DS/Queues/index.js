const LinkedList = require("../Singly Linked Lists/index.js");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
    // Bounded queue size
  }

  // Check if the queue is full or not , if full return false , else return true
  hasRoom() {
    return this.size < this.maxSize;
  }

  // Check if the queue is empty or not , if empty return true , else return false
  isEmpty() {
    return this.size === 0;
  }

  // Add data to the end of the queue
  enqueue(data) {
    // Avoiding overflow
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error("Queue is full!");
    }
  }

  // Remove data from the front of the queue
  dequeue() {
    // Avoiding underflow
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      );
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }

  // Peek at the first element from the front of the queue
  peek() {
    if (!this.isEmpty()) {
      return this.queue.head.data;
    } else {
      return null;
    }
  }

  // There are two conditions when enqueuing and dequeuing that we should be aware of and avoid: underflow and overflow.
  // Underflow occurs when we try to remove elements from an already empty queue – we cannot remove a node if it doesn’t exist.
  // Underflow affects queues whether they are bounded or unbounded.
}

const restaurantOrder = new Queue();
restaurantOrder.enqueue("apple pie");
restaurantOrder.enqueue("roast chicken");
restaurantOrder.enqueue("quinoa salad");
console.log("\nFood preparing...\n");
restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();
console.log("All orders ready!");

module.exports = Queue;
