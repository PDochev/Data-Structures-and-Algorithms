# Insertion Sort

Insertion Sort is a simple and efficient comparison-based sorting algorithm that builds the final sorted array one element at a time. It works similarly to sorting playing cards in your hand, where you pick one card at a time and insert it into its correct position.

## How it Works

Insertion Sort works by iterating over the list of items, starting with the second item. It then compares the current item with the items before it, moving them to the right until it finds the correct position for the current item. This process is repeated for each item in the list. The list is sorted when the last item is reached. The algorithm is stable, meaning it preserves the order of equal elements. It is also an in-place algorithm, meaning it does not require additional memory.

How Insertion Sort Works

1. Assume the first element is already sorted.
2. Pick the next element and compare it with elements in the sorted part (left side).
3. Shift the elements (if necessary) to make space and insert the picked element at the correct position.
4. Repeat until all elements are sorted.

Algorithm (Step-by-Step)

1. Start from the second element (index 1).
2. Compare it with the elements before it.
3. Shift larger elements to the right.
4. Insert the selected element at the correct position.
5. Repeat for all elements.

## Example

```plaintext
# Starting array: [5, 2, 4, 1, 3]

# First pass: 2 is compared with 5
# [5 | 2, 4, 1, 3] → [2, 5 | 4, 1, 3]

# Second pass: 4 is compared with 5 and 2
# [2, 5 | 4, 1, 3] → [2, 4, 5 | 1, 3]

# Third pass: 1 is compared with 5, 4, and 2
# [2, 4, 5 | 1, 3] → [1, 2, 4, 5 | 3]

# Fourth pass: 3 is compared and placed in correct position
# [1, 2, 4, 5 | 3] → [1, 2, 3, 4, 5]

```

## Time Complexity

- The time complexity of Insertion Sort is O(n^2) in the worst-case scenario, where the list is sorted in reverse order. This is because the algorithm has to compare each item with all the items before it. In the best-case scenario, where the list is already sorted, the time complexity is O(n), as the algorithm only needs to compare each item with the previous item.

## Space Complexity

- The space complexity of Insertion Sort is O(1) since it only requires a constant amount of additional memory space for variables.
