# Introduction To Dynamic Programming

Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable to problems exhibiting the properties of overlapping subproblems and optimal substructure.

Dynamic Programming is a programming technique used to solve recursive problems more efficiently.

## Fibonacci

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence begins:

```plaintext
0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
```

It can be calculated using the following recursive formula:

```plaintext
function fib(n)
  if n is 1 or 0:
    return n
  else
    return fib(n - 1) + fib(n - 2)
```

This recursive function is simple and easy to understand. However, it is not the most efficient way to calculate the Fibonacci sequence. The time complexity of this function is O(2^n), which means the number of function calls grows exponentially with the size of `n`.

Let’s visualize all the function calls if we were to calculate the fourth Fibonacci number:

```plaintext
fib(4) -> fib(3) + fib(2)
  fib(3) -> fib(2) + fib(1)
    fib(2) -> fib(1) + fib(0)
  fib(2) -> fib(1) + fib(0)
```

As you can see, the function is called multiple times with the same arguments, which results in redundant calculations. This is where dynamic programming comes in.

## Memoization

Memoization is an optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again. It is a technique that is used to increase the efficiency of recursive algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Memoizing Fibonacci

In the context of the Fibonacci sequence, memoization can be used to store the results of previously calculated Fibonacci numbers. This way, when the function is called with the same argument, the result can be retrieved from the cache instead of recalculating it.

To begin, we’ll use a plain JavaScript object to store the memoized values. We’ll set keys using `n` and values to store the result of that Fibonacci number. Then, whenever we need to calculate a number, if it’s already been calculated, we can retrieve the value from the object in O(1) time.

In pseudocode, our approach to memoization will look something like this:

```plaintext
Create a memo object

function fibonacci(n)
  if n key exists in memo object
    return memo[n]
  else
    calculate current fibonacci number
    store value in memo
    return value
```

### Time Complexity

The time complexity of the Fibonacci function using recursion is O(2^n) due to the exponential growth of recursive calls. In contrast, the memoized version of the Fibonacci function has a time complexity of O(n), as it stores previously computed values, which significantly reduces the number of calculations needed.

### Conclusion

Dynamic programming and memoization are great techniques for breaking up complex recursive problems into smaller chunks. They are especially useful when tackling problems that involve combinations. For example, if I asked you to calculate the total number of ways to get four dice rolls to sum to 13, you could imagine breaking that into multiple parts. You could split 13 into 6 and 7 and then find all the combinations of two rolls that would match each one of these. As you went down each path, you’d probably start seeing a lot of similar calculations, and memoization would help you reduce the number of overall function calls by storing intermediate values.

### References

Front End Engineer Career Path / Interview Prep / JavaScript Algorith Practice / Introduction to Dynamic Programming

- [Codecademy](https://www.codecademy.com)
