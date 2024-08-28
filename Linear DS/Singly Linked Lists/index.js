const Node = require("../Nodes/index.js");

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

//Swapping Elements in a Linked List
//The swapNodes() function takes a linked list and two data values as input and swaps the positions of the nodes with the specified data values.
//It iterates through the list to find the nodes with the matching data values and updates the references of the previous and next nodes to swap the nodes.
//The function also handles edge cases such as when the elements are the same or when one or both elements are not in the list.
//The time complexity of the swapNodes() function is O(n) since it has to iterate through the list to find the matching nodes.
//The space complexity is O(1) since it only creates a constant number of new variables.

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
    node1 = node1.getNextNode(); // node1 = node1.next;
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

  // Return the list (NOTE: This is not required, but it allows for easier testing of the function)
  // return list;
}

//Time and Space Complexity
//The worst case for time complexity in swapNodes() is if both while loops must iterate all the way through to the end (either if there are no matching nodes, or if the matching node is the tail).
//This means that it has a linear big O runtime of O(n), since each while loop has a O(n) runtime, and constants are dropped.
//There are four new variables created in the function regardless of the input, which means that it has a constant space complexity of O(1).

// Reversing a Linked List
// The reverseLinkedList() function takes a linked list as input and reverses the order of the nodes in the list.
// It uses three pointers to keep track of the previous, current, and next nodes while iterating through the list.
// The function reverses the pointers of the current node to point to the previous node, then moves the pointers one position ahead.
// The time complexity of the reverseLinkedList() function is O(n) since it has to iterate through the entire list to reverse the order of the nodes.
// The space complexity is O(1) since it only creates a constant number of new variables.

function reverseLinkedList(linkedList) {
  let prev = null;
  let current = linkedList.head;
  let next = null;

  while (current !== null) {
    // Store next
    next = current.getNextNode();

    // Reverse current node's pointer
    current.setNextNode(prev);

    // Move pointers one position ahead
    prev = current;
    current = next;
  }

  // Set the new head of the reversed list
  linkedList.head = prev;

  return linkedList;
}

// Two-Pointer Linked List Techniques
// Many common singly linked list problems can be solved by iterating with two pointers. This is sometimes known as the runner technique.

// Consider the following problem: Create a function that returns the nth last element of a singly linked list.
// One thing that might first come to mind is to use an array to store a representation of the linked list.
// While this approach results in an easy-to-read implementation, it could also use up lots of memory maintaining a dual representation of the same data.
// If the linked list has one million nodes, we’ll need one million pointers in an array to keep track of it! An approach like this results in an extra O(n) space being allocated.

const arrayNthLast = (list, n) => {
  const linkedListArray = [];
  let currentNode = list.head;
  while (currentNode) {
    linkedListArray.push(currentNode);
    currentNode = currentNode.getNextNode();
  }
  // Handle edge cases where n is greater than the length of the list
  if (n > linkedListArray.length || n <= 0) {
    return null;
  }

  return linkedListArray[linkedListArray.length - n];
};

// Instead of creating an entire parallel list, we can solve this problem by using two pointers at different positions in the list but moving at the same rate.
// As in the previous example, we will use one pointer to iterate through the entire list, but we’ll also move a second pointer delayed n steps behind the first one.

// This way, when the first pointer reaches the end of the list, the second pointer will be n steps behind it, pointing to the nth-to-last node.
// The time complexity is O(n), as we need to iterate through the entire list to find the nth-to-last node just once.
// This approach uses O(1) space, as we only need two pointers to solve the problem.

// Pseudocode:

// nthLastNodePointer = null
// tailPointer = linked list head
// count = 0
// while tail pointer exists
//   move tail pointer forward
//   if count >= n
//     set nthLastNodePointer to head if it's still null or move it forward
//   increment count
// return nthLastNodePointer

const nthLastNode = (linkedList, n) => {
  let nthLastNodePointer = null;
  let tailPointer = linkedList.head;
  let count = 0;
  while (tailPointer) {
    tailPointer = tailPointer.getNextNode();
    // tailPointer = tailPointer.next;
    if (count >= n) {
      if (!nthLastNodePointer) {
        nthLastNodePointer = linkedList.head;
      }
      nthLastNodePointer = nthLastNodePointer.getNextNode();
      // nthLastNodePointer = nthLastNodePointer.next;
    }
    count++;
  }
  return nthLastNodePointer;
};

// Pointers at Different Speeds
// Another two-pointer technique involves sending pointers through the list at different iteration “speeds”
// This approach is useful for detecting cycles in linked lists, as well as finding the middle node of a linked list.

// Consider this problem: Find the middle node of a linked list
// The idea is to have one pointer move through the list one node at a time, while the other pointer moves two nodes at a time.

// Approaches:
// As before, it’s possible to find a solution by iterating through the entire list, creating an array representation, and then returning the middle index.
// But as before, this potentially takes up lots of extra space:

// Pseudocode:
// create array
// while the linked list has not been fully iterated through
// push the current element onto array
// move forward one node
// return array[length / 2]

function arrayMiddle(linkedList) {
  const linkedListArray = [];
  let currentNode = linkedList.head;
  while (currentNode) {
    linkedListArray.push(currentNode);
    currentNode = currentNode.getNextNode();
  }
  return linkedListArray[Math.floor(linkedListArray.length / 2)];
}

// Instead, we can use two pointers to move through the list.
// The first pointer takes two steps through the list for every one step that the second takes, so it iterates twice as fast.

// Pseudocode:
// fastPointer = list head
// slowPointer = list head
// while fastPointer is not null
//   move fastPointer forward
//   if the end of the list has not been reached
//     move fastPointer forward again
//     move slowPointer forward
// return slowPointer

const findMiddle = (linkedList) => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  // As long as the end of the list is not reached
  while (fast !== null) {
    // Move the fast pointer at least one step
    fast = fast.getNextNode();
    // If it isn't at the end of the list
    if (fast !== null) {
      // Move both pointers forward once
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  // At this point, the slow pointer is in the middle
  return slow;
};

// As with the nth-to-last solution, this solution has O(n) time complexity, and O(1) space complexity,
// since only two nodes are created no matter the size of the input list.

// Half-Speed
// Another equally valid solution is to move the fast pointer once with each loop iteration
// but only move the slow pointer every-other iteration.

const findMiddleAlternate = (linkedList) => {
  let count = 0;
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast !== null) {
    fast = fast.getNextNode();
    if (count % 2 !== 0) {
      slow = slow.getNextNode();
    }
    count++;
  }
  return slow;
};

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

// Conclusions
// Two-pointer techniques are useful for solving a variety of linked list problems.

// Many linked list problems can be solved with the two-pointer technique.
// If it seems like a linked list problem requires keeping track of multiple positions or creating other data representations (such as using an array),
// consider whether two pointers iterating in parallel or at different speeds could help solve the problem efficiently.

//TODO:
// Detect a cycle in a linked list
// Rotate a linked list by k places

module.exports = LinkedList;
