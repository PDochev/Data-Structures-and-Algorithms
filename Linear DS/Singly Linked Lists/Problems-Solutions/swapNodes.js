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

module.exports = swapNodes;
