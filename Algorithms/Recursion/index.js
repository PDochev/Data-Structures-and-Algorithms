const LinkedList = require("../../Linear DS/Singly Linked Lists/index.js");

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  } else if (n > 0) {
    return n * recursiveFactorial(n - 1);
  }
};

const iterativeFactorial = (n) => {
  result = 1;
  while (n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
};

const recursiveSum = (n) => {
  if (n === 1) {
    return 1;
  }

  if (n > 0) {
    return recursiveSum(n - 1) + n;
  }
};

console.log(recursiveFactorial(5));
console.log(iterativeFactorial(5));
console.log(recursiveSum(5));

const myList = new LinkedList();

myList.addToHead("Node 1");
myList.addToHead("Node 2");
myList.addToHead("Node 3");
myList.addToHead("Node 4");

const myNodeRecursive = myList.findNodeIteratively("Node 2");
console.log(myNodeRecursive);

module.exports = {
  recursiveFactorial,
  iterativeFactorial,
  recursiveSum,
};
