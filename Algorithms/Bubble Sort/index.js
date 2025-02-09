// Helper function to swap two elements in an array
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

// First implementation of bubble sort
const bubbleSort = (input) => {
  let swapCount = 0;
  let isSwapped = true;

  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        isSwapped = true;
      }
    }
  }
  console.log(`Swapped ${swapCount} times`);
  return input;
};

// Second implementation of bubble sort (Same as first but with nested for loop)
// Reference from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
function bubbleSortForLoop(array) {
  const arrayLength = array.length;
  let isSwapped;

  for (let i = 0; i < arrayLength; i++) {
    isSwapped = false;

    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, array is sorted
    if (!isSwapped) break;
  }

  return array;
}

// Third implementation of bubble sort
// Reference from https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // temp = arr[index_1];
        // arr[index_1] = arr[index_2];
        // arr[index_2] = temp;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

let arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);

const sortedArray = bubbleSortForLoop([45, 23, 3, 5346, 5, 356, 243, 1000]);
console.log("Sorted Array:");
console.log(sortedArray);

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));

module.exports = {
  bubbleSort,
  bubbleSortForLoop,
  bblSort,
};
