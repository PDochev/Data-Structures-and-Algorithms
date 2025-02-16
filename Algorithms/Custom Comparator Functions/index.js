// Sorted in Ascending Order
const ascendingOrder = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

// Sorted in Descending Order
const descendingOrder = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
};

// Sorted by Length in Ascending Order
const sortByLengthAscending = (a, b) => {
  if (a.length === b.length) {
    return ascendingOrder(a, b);
  }
  return a.length - b.length;
};

// Sorted by Length in Descending Order
const sortByLengthDescending = (a, b) => {
  if (a.length === b.length) {
    return descendingOrder(a, b);
  }
  return b.length - a.length;
};

// Explicit Ordering
const explicitSortWithComparator = (inputArray, order) => {
  const explicitComparator = (a, b) => {
    // Default indices to order.length for elements not in order array
    let indexA = order.length;
    let indexB = order.length;

    // If elements exist in order array, get their actual indices
    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }

    return indexA - indexB;
  };

  return inputArray.sort(explicitComparator).slice();
};

// Use this array to test your code:
const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
testArray.sort(ascendingOrder);
console.log(testArray);
testArray.sort(descendingOrder);
console.log(testArray);
// should return [-20, -2, 0, 1, 2, 3, 4, 5, 10, 11, 43]

// Ascending order can be simplified to:
// testArray.sort((a ,b) => a - b);
// Descending order can be simplified to:
// testArray.sort((a ,b) => b - a);

// Sorting by Length
const lengthTestArray = ["apple", "dog", "banana", "cat"];
lengthTestArray.sort(sortByLengthAscending);
console.log(lengthTestArray);
// should return ["dog", "cat", "apple", "banana"]

lengthTestArray.sort(sortByLengthDescending);
console.log(lengthTestArray);
// should return ["banana", "apple", "dog", "cat"]

const inputArray = ["a", "b", "c", "d", "e", "f", "n", "y", "g"];
const order = ["a", "n", "d", "y"];
console.log(explicitSortWithComparator(inputArray, order));
// should return ["a", "n", "d", "y", "b", "c", "e", "f", "g"]
