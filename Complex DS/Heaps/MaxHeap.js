// Implementing a MaxHeap
class MaxHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  popMax() {
    if (this.size === 0) {
      return null;
    }
    console.log(
      `\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`
    );
    this.swap(1, this.size);
    const max = this.heap.pop();
    this.size--;
    console.log(`.. Removed ${max} from heap`);
    console.log("..", this.heap);
    this.heapify();
    return max;
  }

  add(value) {
    console.log(`.. adding ${value}`);
    this.heap.push(value);
    this.size++;
    this.bubbleUp();
    console.log(`added ${value} to heap`, this.heap);
  }

  bubbleUp() {
    let current = this.size;
    while (current > 1 && this.heap[getParent(current)] < this.heap[current]) {
      console.log(
        `.. swap ${this.heap[current]} with parent ${
          this.heap[getParent(current)]
        }`
      );
      this.swap(current, getParent(current));
      console.log("..", this.heap);
      current = getParent(current);
    }
  }

  heapify() {
    console.log("Heapify");
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);

    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild] > this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      (this.exists(leftChild) && this.heap[current] < this.heap[leftChild]) ||
      (this.exists(rightChild) && this.heap[current] < this.heap[rightChild])
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const getParent = (current) => Math.floor(current / 2);
const getLeft = (current) => current * 2;
const getRight = (current) => current * 2 + 1;

// Test the MaxHeap
const maxHeap = new MaxHeap();

// helper function to return a random integer
function randomize() {
  return Math.floor(Math.random() * 40);
}

// populate maxHeap with random numbers
for (let i = 0; i < 6; i++) {
  maxHeap.add(randomize());
}

// display the bubbled up numbers in the heap
console.log("Bubbled Up", maxHeap.heap);

// remove the maximum value from heap
for (let i = 0; i < 6; i++) {
  maxHeap.popMax();
  console.log("Heapified", maxHeap.heap);
}

module.exports = MaxHeap;
