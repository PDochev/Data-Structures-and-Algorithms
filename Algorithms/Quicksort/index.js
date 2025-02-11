const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

// const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
//   if (leftBound < rightBound) {
//     const pivotIndex = partition(array, leftBound, rightBound);
//     quicksort(array, leftBound, pivotIndex - 1);
//     quicksort(array, pivotIndex, rightBound);
//   }
//   return array;
// };

// const partition = (array, leftIndex, rightIndex) => {
//   const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
//   while (leftIndex <= rightIndex) {
//     while (array[leftIndex] < pivot) {
//       leftIndex++;
//     }
//     while (array[rightIndex] > pivot) {
//       rightIndex--;
//     }
//     if (leftIndex <= rightIndex) {
//       swap(array, leftIndex, rightIndex);
//       leftIndex++;
//       rightIndex--;
//     }
//   }
//   return leftIndex;
// };

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    console.log(
      ". Calling partition",
      array,
      `with leftBound ${leftBound} and rightBound ${rightBound}`
    );
    const pivotIndex = partition(array, leftBound, rightBound);
    console.log(`. Returning pivotIndex = ${pivotIndex}`);
    console.log(
      `\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${
        pivotIndex - 1
      }`
    );
    quicksort(array, leftBound, pivotIndex - 1);
    console.log(
      `\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`
    );
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
};

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  console.log(
    `.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`
  );
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
      console.log(
        `.. ${
          array[leftIndex - 1]
        } < ${pivot} : Incremented leftIndex => ${leftIndex}`
      );
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
      console.log(
        `.. ${
          array[rightIndex + 1]
        } > ${pivot} : Decremented rightIndex => ${rightIndex}`
      );
    }
    if (leftIndex <= rightIndex) {
      const string = `${leftIndex} <= ${rightIndex}`;
      swap(array, leftIndex, rightIndex);
      console.log(
        `.. ${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`,
        array
      );
      leftIndex++;
      rightIndex--;
      console.log(
        `......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`
      );
    }
  }
  return leftIndex;
};

const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}

console.log("Before quicksort:", numbers);
const sorted = quicksort(numbers);
console.log("After  quicksort:", sorted);

module.exports = {
  quicksort,
  partition,
  swap,
};
