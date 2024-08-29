const Node = require("../Nodes/index.js");
const swapNodes = require("./Problems-Solutions/swapNodes.js");
const reverseLinkedList = require("./Problems-Solutions/reverseLinkedList.js");
const {
  arrayNthLast,
  nthLastNode,
} = require("./Problems-Solutions/nthLastNode.js");
const {
  arrayMiddle,
  findMiddle,
  findMiddleAlternate,
} = require("./Problems-Solutions/findMiddle.js");

// Singly Linked Lists
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
    if (currentHead !== null) {
      this.head.setNextNode(currentHead);
    }

    // Alternative
    // const newHead = new Node(data);
    // newHead.next = this.head;
    // this.head = newHead
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

  // Removing the tail node from the linked list
  // The removeTail() method removes the tail node from the linked list by iterating through the list to find the second-to-last node.
  // It sets the next node of the second-to-last node to null, indicating the end of the list.

  removeTail() {
    let currentNode = this.head;
    let previousNode = null;

    if (!this.head || !this.head.getNextNode()) {
      this.head = null;
      return;
    }

    while (currentNode.getNextNode() !== null) {
      previousNode = currentNode;
      currentNode = currentNode.getNextNode();
    }
    previousNode.setNextNode(null);
    return;
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

      // ALternative
      // this.head = this.head.getNextNode();
    }
    let currentNode = this.head;
    // while (currentNode !== null)
    while (currentNode.getNextNode() !== null) {
      if (currentNode.getNextNode().data === matchingData) {
        const matchingNode = currentNode.getNextNode();
        // console.log(currentNode);
        // console.log(matchingNode);
        // console.log(matchingNode.getNextNode());
        currentNode.setNextNode(matchingNode.getNextNode());
        return matchingNode;

        // Alternative
        // currentNode.next = currentNode.next.next;
        // return;
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
seasons.removeNode("fall");
console.log(seasons.printList());
console.log(seasons.removeTail());
console.log(seasons.printList());
console.log(seasons);

const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

const generateTestLinkedList = (length) => {
  const linkedList = new LinkedList();
  for (let i = 1; i <= length; i++) {
    linkedList.addToTail(i);
  }
  return linkedList;
};

const testLinkedList = generateTestLinkedList(11);

console.log("findMiddle: ", findMiddle(testLinkedList)); // 6
console.log("findMiddleAlternate: ", findMiddleAlternate(testLinkedList)); // 6
console.log("nthLastNode: ", nthLastNode(testLinkedList, 2)); // 10
console.log("arrayNthLast: ", arrayNthLast(testLinkedList, 2)); // 10
console.log("arrayMiddle: ", arrayMiddle(testLinkedList)); // 6
console.log("Reverse list", reverseLinkedList(testLinkedList)); // 11-10-9-8-7-6-5-4-3-2-1

// Conclusions
// Two-pointer techniques are useful for solving a variety of linked list problems.

// Many linked list problems can be solved with the two-pointer technique.
// If it seems like a linked list problem requires keeping track of multiple positions or creating other data representations (such as using an array),
// consider whether two pointers iterating in parallel or at different speeds could help solve the problem efficiently.

//TODO:
// Detect a cycle in a linked list
// Rotate a linked list by k places

module.exports = LinkedList;
