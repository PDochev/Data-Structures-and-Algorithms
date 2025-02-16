# Sieve of Eratosthenes

The Sieve of Eratosthenes is one of the oldest-known algorithms, and it’s still helpful for deriving prime numbers! The algorithm is attributed to Eratosthenes, a Greek mathemetician born in the third century BCE.

The sieve provides a set of steps for finding all prime numbers up to a given limit.

## Sieve Implementation

The sieve works by first assuming that all numbers from {2, …, n} are prime, and then successively marking them as NOT prime.

The algorithm works as follows:

1. Create a list of all integers from 2 to n.
2. Start with the smallest number in the list (2, the smallest prime number).
3. Mark all multiples of that number up to n as not prime.
4. Move to the next non-marked number and repeat this process until the entire list has been covered.
5. When the steps are complete, all remaining non-marked numbers are prime.

When the steps are complete, all remaining non-marked numbers are prime.

### Example

Let’s find all prime numbers up to 30 using the Sieve of Eratosthenes:

1. Create a list of all integers from 2 to 30.
2. Start with the smallest number in the list (2, the smallest prime number).
3. Mark all multiples of that number up to 30 as not prime.
4. Move to the next non-marked number and repeat this process until the entire list has been covered.
5. When the steps are complete, all remaining non-marked numbers are prime.

The prime numbers up to 30 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

### Implementation Steps in JavaScript

There are many possible ways of implementing this algorithm in JavaScript. We’ll outline a basic approach here and then walk through it step-by-step.

1. Create an array of all integers from 2 to n
2. Set all elements of the array to true
3. Starting with 2, iterate through the array. If the current element is true, it is still considered prime. Since we know that all multiples of that number are NOT prime, iterate through all multiples of that number up to n and set them equal to false
4. Change the current element to the next non-false index.
5. Return the corresponding number value for any element still marked as prime (value of true).

## Time Complexity

The complexity of the Sieve of Eratosthenes with optimizations is O(n log(log n)). This is because the algorithm iterates through all numbers up to n and marks multiples of each number as non-prime. The inner loop iterates through the multiples of the base value, which is approximately log(log n). This results in a time complexity of O(n log(log n)).

## Space Complexity

- The space complexity of the Sieve of Eratosthenes is O(n) as it requires an array to keep track of the prime status of each number.

## Optimizations

**End Boundary**  
In our basic implementation, the outer loop iterated from 2 to n. Because the inner loop marks multiples of a base value, we only need to check individual numbers lower than the square root of n. Consider the example of a limit of 10:

1. The prime numbers less than or equal to the square root of 10 (approximately 3.16) are 2 and 3.
2. For each of these base values, we mark their multiples as non-prime in the inner loop.
3. Thus, we only need to check up to the whole number part (3) instead of the limit.

**First Multiple**
In our basic implementation, the inner loop started checking multiples at 2 times the current number. We can skip a few checks by starting the checks at the (current number)². For example, when checking multiples of 3, we can start at 3 × 3 = 9 instead of 3 × 2 = 6. Additionally, this optimization reduces unnecessary iterations, making the algorithm more efficient.

**Pre-mark All Even Numbers**
This optimization comes in when building the initial array. There’s no need to ever check even numbers after 2, since they will never be prime, so they can all be marked as non-prime initially.

These optimizations may seem small when dealing with a limit of 10, but they can significantly speed up the algorithm with larger limits.

### References

- [Codecademy](https://www.codecademy.com)
