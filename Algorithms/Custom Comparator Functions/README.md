# Sorting with Custom Comparator Functions

In JavaScript, the `sort()` method is used to sort the elements of an array. By default, the `sort()` method sorts elements alphabetically. However, the `sort()` method can also be used to sort elements based on a custom comparator function.

## Custom Comparators

`myArray.sort(myComparatorFunction);`

The comparator function will compare two elements in the array and return a value that `.sort()` will use to determine the sorting order. The function should take two arguments, usually named `a` and `b`:

```javascript
const myComparatorFunction = (a, b) => {};
```

There are three possible categories of return values:

1. A value less than zero, which means a will be sorted at a lower index than b
2. A value greater than zero, which means b will be sorted at a lower index than a
3. The value zero, which means the two elements were equal and won’t be moved
   Now that we’re familiar with the idea of a comparator function, let’s take a look at some examples.

## Sorted in Ascending Order

We’re going to start with one of the most intuitive orderings: ascending. This sort will yield the same results as using a sorting algorithm like quicksort or merge sort. The first step is to create the comparator function. Given inputs a and b, the pseudocode is as follows:

```plaintext
if a is less than b
  return negative number
if a is greater than b
  return positive number
if a is equal to b
  return 0
```

While you could create the `ascendingOrder()` function using three if statements, you could optimize it by simply returning `a - b`. This will return a negative number if `a` is smaller, a positive number if `b` is smaller, and zero if they are equal. Likewise, if you wanted to sort an array in descending order, the function could simply return `b - a`.

## Sorting by Length

If we want to sort an array by each element’s length in ascending order, we should return `-1` when `a` is shorter than `b`, and `1` when `a` is longer than `b`.

## Explicit Ordering

Let’s try a more complicated custom comparator. Given an input array, we want to sort the array given to an explicit order. If elements aren’t in the given explicit order, put them at the back in the same order they appeared in. For example, given:

```javascript
const inputArray = ["a", "b", "c", "d", "e", "f", "n", "y", "g"];
const order = ["a", "n", "d", "y"];
```

the comparator function explicitSort(inputArray, order) should return:

```javascript
["a", "n", "d", "y", "b", "c", "e", "f", "g"];
```

In order to do this, we are going to use an `explicitSortWithComparator()` function that takes `inputArray` and `order` as parameters, and has an internal `explicitComparator()` function, which is what will take `a` and `b`. At the end of `explicitSortWithComparator()`, we will call `.sort(explicitComparator)` on `inputArray` and return the result.

The `explicitComparator()` function will find the indices of `a` and `b` in the `order` array (if they exist) and return the difference between them:

```plaintext
indexA and indexB are initialized to the length of the order array
if a is in order
  indexA = a's index in order
if b is in order
  indexB = b's index in order
return indexA - indexB
```

## Time and Space Complexity

The time and space complexities of your custom comparator functions will vary depending on your implementations, but what about the time and space complexities of JavaScript’s internal `.sort()` method? That depends on the length of the array you want to sort. If the array has 10 or fewer elements, then the method will use insertion sort, with a time complexity of `O(n^2)` and a space complexity of `O(1)`. If the array is longer, then the method will use quicksort, giving it a time complexity of `O(n log n)` and a space complexity of `O(log n)`.

### References

- [Codecademy](https://www.codecademy.com)
