# Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

## Pseudocode

```plaintext
while array is not sorted
  for each value in array
    if current value > next value
      swap current value and next value

return array
```

### Time Complexity

- The time complexity of Bubble Sort is O(n^2) in the worst and average case scenarios.
- The best case time complexity is O(n) when the list is already sorted.

### Space Complexity

- The space complexity of Bubble Sort is O(1) because it only requires a constant amount of extra space for temporary variables.
