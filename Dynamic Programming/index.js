// Using recursion
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55

// Using memoization
const memo = {};

const fibonacciMemo = (num) => {
  // Base cases
  if (num <= 1) {
    return num;
  }

  // Check if value is already memoized
  if (memo[num]) {
    return memo[num];
  }

  // Calculate and store in memo
  memo[num] = fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
  return memo[num];
};

// Using memoization
// function fibonacciMemo(n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n <= 1) return n;
//     memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
//     return memo[n];
//   }

console.log(fibonacciMemo(20)); // 55
