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

module.exports = reverseLinkedList;
