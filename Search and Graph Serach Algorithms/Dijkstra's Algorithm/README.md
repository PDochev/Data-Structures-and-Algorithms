# Dijkstra's algorithm

Dijkstra’s algorithm is a method for finding the shortest distance from a given point to every other point in a weighted graph. The algorithm works by keeping track of all the distances and updating the distances as it conducts a breadth-first search. A common application of this algorithm is to find the quickest route from one destination to another.

Dijkstra’s Algorithm works as following:

1. Instantiate a dictionarythat will eventually map vertices to their distance from the start vertex
2. Assign the start vertex a distance of 0 in a min heap
3. Assign every other vertex a distance of infinity in a min heap
4. Remove the vertex with the smallest distance from the min heap and set that to the current vertex
5. For the current vertex, consider all of its adjacent vertices and calculate the distance to them as (distance to the current vertex) + (edge weight of current vertex to adjacent vertex).
6. If this new distance is less than the current distance, replace the current distance.
7. Repeat 4 and 5 until the heap is empty
8. After the heap is empty, return the distances

## Time Complexity

Just like breadth-first search and depth-first search, to search through an entire graph, in the worst case, we would go through all of the edges and all of the vertices resulting in a runtime of O(E + V). E is the number of edges and V is the number of vertices.

For Dijkstra’s, we use a min-heap to keep track of all the distances. Searching through and updating a min-heap with V nodes takes O(log V) because in each layer of the min-heap, we reduce the number of nodes we are looking at by a factor of 2.

In the worst case, we would update the min-heap every iteration. Since there are at most E + V iterations of Dijkstra’s and it takes log V to update a min-heap in the worst case, then the runtime of Dijkstra’s is O((E+V)log V).

## Space Complexity

- The space complexity is O(V) because we are using additional space that grows with the input size to store vertices in the graph.

### References

- [Codecademy](https://www.codecademy.com)
