# Binary Search

Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.

Binary search requires a sorted data-set. We then take the following steps:

1. Check the middle value of the dataset.

- If this value matches our target we can return the index.

2. If the middle value is less than our target

- Start at step 1 using the right half of the list.

3. If the middle value is greater than our target

- Start at step 1 using the left half of the list.

## Binary Tree

A binary tree is an efficient data structure for fast data storage and retrieval due to its O(log N) runtime.It is a specialized tree data structure that is made up of a root node, and at most two child branches or subtrees. Each child node is itself a binary tree.

Each node has the following properties:

- data
- a depth value, where depth of 1 indicates the top level of the tree and a depth greater than 1 is a level somewhere lower in the tree
- a left pointer that points to a left child which is itself a binary tree, and must have a data lesser than the root node’s data
- a right pointer that points to a right child which is itself a binary tree, and must have a data greater than the root node’s data

## Traversing a Binary Tree

There are two main ways of traversing a binary tree: breadth-first and depth-first. With breadth-first traversal, we begin traversing at the top of the tree’s root node, displaying its data and continuing the process with the left child node and the right child node. Descend a level and repeat this step until we finish displaying all the child nodes at the deepest level from left to right.

With depth-first traversal, we always traverse down each left-side branch of a tree fully before proceeding down the right branch. However, there are three traversal options:

- Preorder is when we perform an action on the current node first, followed by its left child node and its right child node
- Inorder is when we perform an action on the left child node first, followed by the current node and the right child node
- Postorder is when we perform an action on the left child node first, followed by the right child node and then the current node

### Time Complexity

In each iteration, we are cutting the list in half. The time complexity is O(log N). A sorted list of 64 elements will take at most log2(64) = 6 comparisons.

In the worst case:

- Comparison 1: We look at the middle of all 64 elements
- Comparison 2: If the middle is not equal to our search value, we would look at 32 elements
- Comparison 3: If the new middle is not equal to our search value, we would look at 16 elements
- Comparison 4: If the new middle is not equal to our search value, we would look at 8 elements
- Comparison 5: If the new middle is not equal to our search value, we would look at 4 elements
- Comparison 6: If the new middle is not equal to our search value, we would look at 2 elements

Without any knowledge about the ordering, we would resort to a linear search taking O(N) time.

### Space Complexity

- The space complexity is O(1) because we are not using any additional space that grows with the input size.
