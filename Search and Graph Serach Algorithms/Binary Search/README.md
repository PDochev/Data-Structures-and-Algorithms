# Binary Search

Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.

Binary search requires a sorted data-set. We then take the following steps:

1. Find the middle element of the data set

2. If the middle element is equal to the target value, we have found the value

3. If the middle element is less than the target value, we repeat the search on the right half of the data set

4. If the middle element is greater than the target value, we repeat the search on the left half of the data set

5. If the target value is not found, we return -1

## Binary Tree

A binary tree is an efficient data structure for fast data storage and retrieval due to its O(log N) runtime.It is a specialized tree data structure that is made up of a root node, and at most two child branches or subtrees. Each child node is itself a binary tree.

Each node has the following properties:

- `data`
- `a depth value`, where depth of 1 indicates the top level of the tree and a depth greater than 1 is a level somewhere lower in the tree
- `a left pointer` that points to a left child which is itself a binary tree, and must have a data lesser than the root node’s data
- `a right pointer` that points to a right child which is itself a binary tree, and must have a data greater than the root node’s data

## Traversing a Binary Tree

There are two main ways of traversing a binary tree: breadth-first and depth-first.

### Breadth-First Traversal

Breadth-first traversal visits all the nodes of a level before moving to the next level. It uses a queue to keep track of the nodes to visit.

### Depth-First Traversal

With depth-first traversal, we always traverse down each left-side branch of a tree fully before proceeding down the right branch. There are three main ways to perform a depth-first traversal:

1. In-order traversal (left, root, right)
2. Pre-order traversal (root, left, right)
3. Post-order traversal (left, right, root)

#### Time Complexity

In each iteration, we are cutting the list in half. The time complexity is O(log N). A sorted list of 64 elements will take at most log2(64) = 6 comparisons.

In the worst case:

- Comparison 1: We look at the middle of all 64 elements
- Comparison 2: If the middle is not equal to our search value, we would look at 32 elements
- Comparison 3: If the new middle is not equal to our search value, we would look at 16 elements
- Comparison 4: If the new middle is not equal to our search value, we would look at 8 elements
- Comparison 5: If the new middle is not equal to our search value, we would look at 4 elements
- Comparison 6: If the new middle is not equal to our search value, we would look at 2 elements

Without any knowledge about the ordering, we would resort to a linear search taking O(N) time.

#### Space Complexity

- The space complexity is O(1) because we are not using any additional space that grows with the input size.

#### References

Front End Engineer Career Path / Interview Prep / Search and Graph Search Algorithms / Binary Search and Search Trees

- [Codecademy](https://www.codecademy.com)
