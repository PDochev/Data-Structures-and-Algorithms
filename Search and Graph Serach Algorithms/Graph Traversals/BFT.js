const { Graph } = require("../../Complex DS/Graphs/index.js");
const Queue = require("../../Linear DS/Queues/index.js");

const breadthFirstTraversal = (start, callback) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    callback(current);

    current.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    });
  }
};

const recursiveBFT = (start, callback) => {
  const visitedVertices = new Set([start]);
  const queue = new Queue();
  queue.enqueue(start);

  // Helper function that handles the recursive part
  const bftRecursive = (queue, visited) => {
    // Base case: if queue is empty, we're done
    if (queue.isEmpty()) {
      return;
    }

    const current = queue.dequeue();
    callback(current);

    current.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    });

    // Recursive call with the updated queue
    bftRecursive(queue, visited);
  };

  // Start the recursion
  bftRecursive(queue, visitedVertices);
};

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex("v0.0.0");
const v1 = simpleGraph.addVertex("v1.0.0");
const v2 = simpleGraph.addVertex("v2.0.0");

const v11 = simpleGraph.addVertex("v1.1.0");
const v12 = simpleGraph.addVertex("v1.2.0");
const v21 = simpleGraph.addVertex("v2.1.0");

const v111 = simpleGraph.addVertex("v1.1.1");
const v112 = simpleGraph.addVertex("v1.1.2");
const v121 = simpleGraph.addVertex("v1.2.1");
const v211 = simpleGraph.addVertex("v2.1.1");

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);

simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);

simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);

breadthFirstTraversal(simpleGraph.vertices[0], (vertex) => {
  console.log(vertex.data);
});
recursiveBFT(simpleGraph.vertices[0], (vertex) => {
  console.log(vertex.data);
});
