# Asymptotic Notation

Asymptotic notation is used to describe the efficiency of an algorithm. It is used to describe the performance of an algorithm as the input size grows to infinity. It is used to describe the best case, worst case, and average case scenarios of an algorithm.

## Big O Notation - O

Big O notation is used to describe the worst case scenario of an algorithm.

## Big Omega Notation - Ω

Big Omega notation is used to describe the best case scenario of an algorithm.

## Big Theta Notation - Θ

It is used to describe the average case scenario of an algorithm. We use big Theta when a program has only one case in terms of runtime.

### Common Runtimes

- `O(1)` - Constant Time - The runtime of the algorithm does not change based on the input size. You see this in algorithms that access a single element in an array.
- `O(log n)` - Logarithmic Time - The runtime of the algorithm grows logarithmically as the input size grows. You see this in algorithms that divide the input in half each time.
- `O(n)` - Linear Time - The runtime of the algorithm grows linearly as the input size grows. You see this in algorithms that iterate through the input.
- `O(n log n)` - Linearithmic Time - The runtime of the algorithm grows in n log n time. You see this in algorithms that divide the input in half and iterate through each half.
- `O(n^2)` - Quadratic Time - The runtime of the algorithm grows quadratically as the input size grows. You see this in algorithms that have nested iterations.
- `O(2^n)` - Exponential Time - The runtime of the algorithm grows exponentially as the input size grows. You see this in algorithms that have recursive algorithms that make multiple calls to itself.
- `O(n!)` - Factorial Time - The runtime of the algorithm grows factorially as the input size grows. You see this in algorithms when you have to generate multiple permutations of a set.

![Big-O Complexity Chart](Big_O.png)

#### Space Complexity

Space complexity is a measure of the amount of working storage an algorithm needs. It is used to describe the amount of memory an algorithm uses as the input size grows to infinity.

```js
function addNumbers(a, b) {
  return a + b;
}
```

This function has a space complexity of O(1), because the amount of space it needs will not change based on the input. While this function also has a constant runtime of O(1), most functions do not have matching space and time complexities.

```js
function simpleLoop(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    console.log(i);
  }
}
```

As we know, a simple for loop that goes through every element in an array of size n has a linear runtime of O(n). However, this function takes O(1) space since no new variables are being created and therefore no more space must be allocated.

Like with time complexity, space complexity denotes space growth in relation to the input size. It’s also important to note that space complexity usually refers to any additional space that will be needed, and doesn’t count the space of the input. So a function could have 10 arrays passed into it, but if all it does inside is print 'Hello World!', then it still takes O(1) space.

##### Summary

In summary, asymptotic notations are essential for analyzing the performance of algorithms, allowing developers to select the most efficient algorithms for their needs.

###### References

Front End Engineer Career Path / Interview Prep / Algorithms / Asymptotic Notation

- [Codecademy](https://www.codecademy.com)
