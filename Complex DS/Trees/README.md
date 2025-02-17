# Trees

![Trees Data Structure](Trees.svg)

Trees are an essential data structure for storing `hierarchical data` with a directed flow.
They are composed of `nodes`that are connected by `edges`. Each tree has a root node, and every node in the tree is connected by edges.
The root node is the topmost node in the tree, and it does not have any parent nodes. The nodes that are connected to the root node are called child nodes.
A node can have zero or more children. The node that has children is called the parent node. The nodes that do not have any children are called leaf nodes.

- `root:` The topmost node in a tree.
- `parent:` A node which has child nodes connected to it.
- `child:` A node that has a parent node connected to it.
- `sibling:` Nodes that share the same parent node.
- `leaf:` A node that does not have any children.
- `level:` The height or depth of a tree. The distance between a node and the root node.

## Tree Shapes

- **Wide Trees**: Trees with parent nodes that have many child nodes.
- **Deep Trees**: Trees with many levels of nodes and few child nodes.

## Depth and Height

The level of a node is the number of edges on the path from the root node to that node. The root node is at level 0, and its children are at level 1, and so on.
Depending on the orientation, we refer to this as the depth (counting levels down from the root node) or height (counting levels up from a leaf node).

### Use cases

Trees are used in computer science and software engineering to represent data in a hierarchical manner. They are used in various applications, such as file systems, databases, and network routing algorithms.
Trees are also used in algorithms like binary search trees, AVL trees, and red-black trees to efficiently store and retrieve data.

A binary tree is a type of tree where each parent can have no more than two children, known as the left child and right child.

A binary search tree is a binary tree where the left child is less than the parent, and the right child is greater than the parent. This property allows for efficient searching, inserting, and deleting of values.
