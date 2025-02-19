# Sieve of Eratosthenes

This algorithm efficiently finds all prime numbers up to a specified integer. It works by iteratively marking the multiples of each prime number starting from 2.

## Sieve Implementation

The algorithm works as follows:

1. Create a list of integers from 2 to n: `2, 3, 4, ..., n`.
2. Start with a counter variable set to 2, which is the first prime number.
3. Starting from 2, mark every 2nd number in the list as false. This means that 4, 6, 8, 10, etc. are not prime numbers.
4. Find the next number in the list that is not marked as false. This number is the next prime number.
5. Repeat steps 3 and 4 until the square of the next prime number is greater than n.
6. All remaining numbers in the list that are not marked as false are prime numbers.

## Pseudocode

```plaintext
function sieve(n)
    is_prime = array of n booleans, all set to true
    is_prime[0] = false
    is_prime[1] = false

    for i from 2 to sqrt(n)
        if is_prime[i] is true
            for j from i^2 to n with step i
                is_prime[j] = false

    return all i such that is_prime[i] is true
```

## Example

Let's find all prime numbers up to 30 using the Sieve of Eratosthenes algorithm:

1. Create a list of integers from 2 to 30: `2, 3, 4, ..., 30`.
2. Start with the first prime number, 2.
3. Mark every 2nd number in the list as false: `4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30`.
4. The next number in the list that is not marked as false is 3, which is the next prime number.
5. Mark every 3rd number in the list as false: `9, 15, 21, 27`.
6. The next number in the list that is not marked as false is 5, which is the next prime number.
7. Mark every 5th number in the list as false: `25`.
8. The square of the next prime number, 7, is greater than 30, so we stop.
9. All remaining numbers in the list that are not marked as false are prime numbers: `2, 3, 5, 7, 11, 13, 17, 19, 23, 29`.
10. Thus, the prime numbers up to 30 are confirmed.

## Time Complexity

The complexity of the Sieve of Eratosthenes with optimizations is O(n log(log n)). This is because the algorithm iterates through all numbers up to n and marks multiples of each number as non-prime. The inner loop iterates through the multiples of the base value, which is approximately log(log n). This results in a time complexity of O(n log(log n)).

## Space Complexity

The space complexity of the Sieve of Eratosthenes is O(n). This is because the algorithm uses an array of size n to store the boolean values indicating whether each number is prime or not.

## Optimizations

1. **Start from the square of the prime number**: When marking multiples of a prime number, we can start from the square of the prime number instead of the prime number itself. This is because smaller multiples of the prime number would have already been marked by smaller prime numbers.
2. **Skip even numbers**: Since all even numbers greater than 2 are not prime, we can skip marking them as false in the array.
3. **Skip multiples of small primes**: When marking multiples of a prime number, we can skip multiples of small primes that are less than the square root of the current prime number. This is because they would have already been marked by smaller primes.
