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

module.exports = { arrayMiddle, findMiddle, findMiddleAlternate };
