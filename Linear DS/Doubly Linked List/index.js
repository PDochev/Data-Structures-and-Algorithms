// Doubly Linked List
const Node = require("../Nodes/index.js");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adding to the List

  // Adding to the Head
  // When adding to the head of the doubly linked list, we first need to check if there is a current head to the list.
  // If there isn’t, then the list is empty, and we can simply make our new node both the head and tail of the list and set both pointers to null.
  // If the list is not empty, then we will:

  // 1. Set the current head’s previous pointer to our new head
  // 2. Set the new head’s next pointer to the current head
  // 3. Set the new head’s previous pointer to null

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  // Adding to the Tail
  // Similarly, there are two cases when adding a node to the tail of a doubly linked list.
  // If the list is empty, then we make the new node the head and tail of the list and set the pointers to null. If the list is not empty, then we:

  // 1. Set the current tail’s next pointer to the new tail
  // 2. Set the new tail’s previous pointer to the current tail
  // 3. Set the new tail’s next pointer to null

  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;

    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = this.tail;
    }
  }

  // Removing from the List

  // Removing the Head
  // Removing the head involves updating the pointer at the beginning of the list.
  // We will set the previous pointer of the new head (the element directly after the current head) to null, and update the head property of the list.
  // If the head was also the tail, the tail removal process will occur as well.

  removeHead() {
    const removedHead = this.head;

    if (!removedHead) {
      return;
    }

    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }

    return removedHead.data;
  }

  // Removing the Tail
  // Similarly, removing the tail involves updating the pointer at the end of the list.
  // We will set the next pointer of the new tail (the element directly before the tail) to null, and update the tail property of the list.
  // If the tail was also the head, the head removal process will occur as well.

  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }

    return removedTail.data;
  }

  // Removing from the Middle of the List
  // It is also possible to remove a node from the middle of the list.
  // Since that node is neither the head nor the tail of the list, there are two pointers that must be updated:
  // 1. We must set the removed node’s preceding node’s next pointer to its following node
  // 2. We must set the removed node’s following node’s previous pointer to its preceding node

  // The removeByData() method searches for a node with the specified data and removes it from the list.
  // If the node is the head or tail, the removeHead() or removeTail() method is called.
  // Otherwise, the pointers of the preceding and following nodes are updated to remove the node from the list.
  // The method returns the removed node if it is found, or null if the node is not in the list.
  // The removeByData() method has a time complexity of O(n) because it must traverse the list to find the node to remove.

  // There is no need to change the pointers of the removed node, as updating the pointers of its neighboring nodes will remove it from the list.
  // If no nodes in the list are pointing to it, the node is orphaned.

  // TODO: Iterate from the tail to the head if the data is closer to the tail.

  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }

    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }

  // Printing the linked list
  // The printList() method traverses the linked list and prints the data of each node in the list.
  // It starts at the head node and moves to the next node until it reaches the end of the list.

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

const subway = new DoublyLinkedList();
subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.printList();
subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.printList();
subway.removeHead();
subway.removeTail();
subway.printList();
subway.removeByData("TimesSquare");
subway.printList();

module.exports = DoublyLinkedList;
