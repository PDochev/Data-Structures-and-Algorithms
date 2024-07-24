const Node = require("../Nodes/index.js");

// Linked Lists
// A linked list is a linear data structure that consists of a sequence of elements, each of which is connected to the next element in the sequence.
// Each element in a linked list is called a node, and each node contains two key pieces of information: the data and a reference to the next node.
// The first node in a linked list is called the head, and the last node is called the tail. The tail node's reference to the next node is null, indicating the end of the list.
// There are two main types of linked lists: singly linked lists and doubly linked lists. In a singly linked list, each node contains a reference to the next node in the sequence.
// In a doubly linked list, each node contains references to both the next node and the previous node in the sequence.
// Linked lists are commonly used to implement other data structures like stacks, queues, and graphs.

// Implementing a Singly Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adding a new node to the head of the linked list
  // The addToHead() method creates a new node with the specified data and sets the current head node as the next node of the new node.
  // It then sets the new node as the head of the linked list.
  // If the linked list is empty, the new node becomes the head of the list.
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  // Adding a new node to the tail of the linked list
  // The addToTail() method adds a new node with the specified data to the end of the linked list.
  // It iterates through the list to find the last node and sets the next node of the last node to the new node.
  // If the list is empty, the new node becomes the head of the list.
  // The addToTail() method has a time complexity of O(n) since it has to iterate through the list to find the last node.
  // The space complexity is O(1) since it only creates a constant number of new variables.
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  // Removing the head node from the linked list
  // The removeHead() method removes the head node from the linked list and sets the next node as the new head.
  // It returns the data of the removed head node.
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  // Searching for a node with matching data and removing it from the linked list
  // The removeNode() method searches for a node with the specified data in the linked list and removes it.
  // It iterates through the list to find the node with the matching data and updates the references of the previous and next nodes to remove the node.
  // The removeNode() method has a time complexity of O(n) since it has to iterate through the list to find the matching node.
  // The space complexity is O(1) since it only creates a constant number of new variables.

  removeNode(matchingData) {
    if (!this.head) {
      return null;
    }
    if (this.head.data === matchingData) {
      return this.removeHead();
    }
    let currentNode = this.head;
    while (currentNode.getNextNode()) {
      if (currentNode.getNextNode().data === matchingData) {
        const matchingNode = currentNode.getNextNode();
        currentNode.setNextNode(matchingNode.getNextNode());
        return matchingNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  // Printing the linked list
  // The printList() method traverses the linked list and prints the data of each node in the list.
  // It starts at the head node and moves to the next node until it reaches the end of the list.
  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

const seasons = new LinkedList();
console.log(seasons.printList());
seasons.addToHead("summer");
seasons.addToHead("spring");
console.log(seasons.printList());
seasons.addToTail("fall");
seasons.addToTail("winter");
console.log(seasons.printList());
seasons.removeHead();
console.log(seasons.printList());
seasons.removeNode("summer");
console.log(seasons.printList());
console.log(seasons);

//Swapping Elements in a Linked List
const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);

  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  if (data1 === data2) {
    console.log("Elements are the same - no swap to be made");
    return;
  }

  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log("Swap not possible - one or more element is not in the list");
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

//Time and Space Complexity
//The worst case for time complexity in swapNodes() is if both while loops must iterate all the way through to the end (either if there are no matching nodes, or if the matching node is the tail).
//This means that it has a linear big O runtime of O(n), since each while loop has a O(n) runtime, and constants are dropped.
//There are four new variables created in the function regardless of the input, which means that it has a constant space complexity of O(1).

module.exports = LinkedList;
