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

module.exports = { arrayNthLast, nthLastNode };
