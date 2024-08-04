// Nodes form the basis of all data structures. They are the building blocks for more complex data structures like linked lists, stacks, queues, and trees.
// A Node consists of two key pieces of information: the data and a reference to the next node.
// The data can be any data type, and the reference to the next node is a pointer to another instance of a Node.
// This reference is what allows nodes to be linked together to form more complex data structures.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
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
