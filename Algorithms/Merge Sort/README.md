# Merge Sort

Merge sort is a sorting created by John von Neumann in 1945. Merge Sort is a divide-and-conquer algorithm that divides a list into equal halves, sorts the two halves, and then merges them back together. In a divide-and-conquer algorithm, the data is continually broken down into smaller elements until sorting them becomes really simple. Merge sort was the first of many sorts that use this strategy, and is still in use today in many different applications.

## How it Works

Merge sort works by repeatedly dividing the list into halves until each half contains a single element and then combining those halves back together in sorted order. When splitting the data, we divide the input to our sort in half. We then recursively call the sort on each of those halves, which cuts the halves into quarters. This process continues until all of the lists contain only a single element. Then we begin merging.

When merging two single-element lists, we check if the first element is smaller or larger than the other. Then we return the two-element list with the smaller element followed by the larger element.

1. **Divide**: Split the unsorted list into n sublists, each containing one element.
2. **Conquer**: Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.
3. **Combine**: The final sorted list is produced when all sublists are merged.

## Pseudocode

```plaintext
function mergeSort(array):
  if the length of the array is less than 2:
    return the array
  set middle to the length of the array divided by 2
  set left to the result of calling mergeSort on the left half of the array
  set right to the result of calling mergeSort on the right half of the array
  return the result of calling merge on left and right
```

## Time Complexity

- The time complexity of Merge Sort is O(n log n) in the worst, average, and best case scenarios. This is because the list is always divided in half, and the merge operation takes linear time. This means an almost-sorted list will take the same amount of time as a completely out-of-order list. This is acceptable because the worst-case scenario, where a sort could stand to take the most time, is as fast as a sorting algorithm can be.

## Space Complexity

- The space complexity of Merge Sort is O(n) because it requires additional space to hold the temporary arrays used for merging.
