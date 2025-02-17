# Quick Sort

Quick Sort is a sorting algorithm that was developed by Tony Hoare in 1960. Quicksort is an efficient algorithm for sorting values in a list. A single element, the pivot, is chosen from the list. All the remaining values are partitioned into two sub-lists containing the values smaller than and greater than the pivot element.

Ideally, this process of dividing the array will produce sub-lists of nearly equal length, otherwise, the runtime of the algorithm suffers.

When the dividing step returns sub-lists that have one or less elements, each sub-list is sorted. The sub-lists are recombined, or swaps are made in the original array, to produce a sorted list of values.

## Pseudocode

```plaintext
If there is more than one element left in the array:
  Find the pivot index through partitioning

If the left pointer is less than the pivot index:
    Call quicksort() on the portion of the array between the left pointer and the pivot.

If the pivot index is less than the right pointer:
    Call quicksort() on the portion of the array between the pivot index and the right pointer.

Return the sorted array
```

### Time Complexity

- Quicksort is an unusual algorithm in that the worst case runtime is O(N^2), but the average case is O(N \* logN). The worst case occurs when the pivot element is the smallest or largest element in the list, which causes the partitioning to be unbalanced. The average case occurs when the pivot element is the median of the list, which causes the partitioning to be balanced.

### Space Complexity

- The space complexity of Quick Sort is O(log n) because it requires a small amount of additional space for the recursive stack, and it performs in-place sorting.
