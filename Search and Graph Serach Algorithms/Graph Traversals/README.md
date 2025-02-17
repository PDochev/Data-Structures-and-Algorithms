# Graph Traversals

Graph traversal is the process of visiting all the vertices of a graph. There are two main ways to traverse a graph: depth-first and breadth-first.

- depth-first search, known as DFS follows each possible path to its end
- breadth-first search, known as BFS broadens its search from the point of origin to an ever-expanding circle of neighboring vertices

## Depth-First Search (DFS)

Simply put, a depth-first graph search continues down a path until it reaches the end. It is helpful for determining if a path exists between two vertices. DFS has many applications, including topological sorting and detecting cycles, but one of the more interesting real-world applications is that it can be used to solve problems that have a singular correct answer (a path between the start state and end state), such as a sudoku exercise.

DFS implementations use either a stack data structure or, more commonly, recursion to keep track of the path the search is on and the current vertex.

In a stack implementation, the most recently added vertex is popped off the stack when the search has reached the end of the path. Meanwhile, in a recursive implementation, the DFS function is recursively called for each connected vertex.

## Breadth-First Search (BFS)

On the other hand, a breadth-first graph search approach checks the values of all neighboring vertices before moving into another level of depth. This is an incredibly inefficient way to find just any path between two vertices, but it’s an excellent way to identify the shortest path between them. Because of this, BFS is helpful for figuring out directions from one place to another.

Unlike DFS, BFS graph search implementations use a queue data structure to keep track of the current vertex and vertices that still have unvisited neighbors. In BFS graph search a vertex is dequeued when all neighboring vertices have been visited.

## Dijkstra’s Algorithm (Shortest Path)

Dijkstra’s algorithm is a method for finding the shortest distance from a given point to every other point in a weighted graph. The algorithm works by keeping track of all the distances and updating the distances as it conducts a breadth-first search. A common application of this algorithm is to find the quickest route from one destination to another.

### Graph Search Traversal Order

What if you don’t need to find a path, but you do need to get a list of all the values in a graph?

Well, it turns out that in addition to path-finding, depth-first search is pretty adept at organizing vertices (or vertex values) with a clear order of visitation from beginning to end.

There are three main traversal orders that you’ll come across for graph traversal:

- `Preorder`, in which each vertex is added to the “visited” list and added to the output list BEFORE getting added to the stack
- `Postorder`, in which each vertex is added to the “visited” list and added to the output list AFTER it is popped off the stack
- `Reverse Post-Order` (also known as Topological Sort), which returns an output list that is exactly the reverse of the post-order list

#### Time Complexity

- The time complexity is O(V + E) where V is the number of vertices and E is the number of edges in the graph.

#### Space Complexity

- The space complexity is O(V) because we are using additional space that grows with the input size to store vertices in the graph.

##### References

Front End Engineer Career Path / Interview Prep / Search and Graph Search Algorithms / Graph Traversals

- [Codecademy](https://www.codecademy.com)
