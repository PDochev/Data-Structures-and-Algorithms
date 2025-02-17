// Implementing a Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  // setNext(data) {
  //   this.next = data;
  // }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error("Previous node must be a member of the Node class");
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am the next Node!");

firstNode.setNextNode(secondNode);
console.log(firstNode);
console.log(firstNode.getNextNode());

// Example of linked Nodes
const vanillaNode = new Node("Vanilla");
const strawberryNode = new Node("Berry Tasty");
const coconutNode = new Node("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);
// console.log(strawberryNode.next);

// Traversing the linked Nodes
// The following code snippet demonstrates how to traverse the linked nodes
// by starting at the first node and moving to the next node until there are no more nodes to visit.
let currentNode = vanillaNode;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;
