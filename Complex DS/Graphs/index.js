class Edge {
  constructor(start, end, weight = null) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  // Add method to check if edge exists
  hasEdge(vertex) {
    return this.edges.some((edge) => edge.end === vertex);
  }

  addEdge(vertex, weight) {
    if (!(vertex instanceof Vertex)) {
      throw new Error("Edge start and end must both be Vertex");
    }

    // Only add the edge if it doesn't already exist
    if (!this.hasEdge(vertex)) {
      this.edges.push(new Edge(this, vertex, weight));
      return true;
    }
    return false;
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter((edge) => edge.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter((v) => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    if (!(vertexOne instanceof Vertex) || !(vertexTwo instanceof Vertex)) {
      throw new Error("Expected Vertex arguments.");
    }

    const edgeWeight = this.isWeighted ? weight : null;
    let edgeAdded = false;

    // Try to add the first edge
    edgeAdded = vertexOne.addEdge(vertexTwo, edgeWeight);

    // If the graph is undirected, try to add the reverse edge
    if (!this.isDirected) {
      const reverseEdgeAdded = vertexTwo.addEdge(vertexOne, edgeWeight);
      // Return true if either edge was added
      return edgeAdded || reverseEdgeAdded;
    }

    return edgeAdded;
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);

      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  getVertexByValue(value) {
    return this.vertices.find((vertex) => vertex.data === value);
  }

  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }
}

const trainNetwork = new Graph(true, true);
const losAngeles = trainNetwork.addVertex("Los Angeles");
const sanFrancisco = trainNetwork.addVertex("San Francisco");
const newYork = trainNetwork.addVertex("New York");
const atlanta = trainNetwork.addVertex("Atlanta");
const denver = trainNetwork.addVertex("Denver");
const calgary = trainNetwork.addVertex("Calgary");

trainNetwork.addEdge(sanFrancisco, losAngeles, 400);
trainNetwork.addEdge(losAngeles, sanFrancisco, 400);
trainNetwork.addEdge(newYork, denver, 1800);
trainNetwork.addEdge(denver, newYork, 1800);
trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);
trainNetwork.addEdge(losAngeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losAngeles, 2100);

trainNetwork.removeEdge(newYork, denver);
trainNetwork.removeEdge(calgary, denver);
trainNetwork.removeEdge(denver, calgary);
trainNetwork.removeVertex(calgary);

trainNetwork.print();

module.exports = {
  Graph,
  Vertex,
  Edge,
};
