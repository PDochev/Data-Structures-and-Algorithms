// Optimized version of the Sieve of Eratosthenes algorithm to find all prime numbers up to a given limit.
const sieveOfEratosthenes = (limit) => {
  // Handle edge cases
  if (limit <= 1) {
    return [];
  }
  // Create the output
  const output = new Array(limit + 1).fill(true);
  // Mark 0 and 1 as non-prime
  output[0] = false;
  output[1] = false;

  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(limit, 0.5); i++) {
    if (output[i] === true) {
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }

  // Remove non-prime numbers
  return output.reduce((primes, current, index) => {
    if (current) {
      primes.push(index);
    }
    return primes;
  }, []);
};

// Original version
// const sieveOfEratosthenes = (limit) => {
//   if (limit <= 1) {
//     return [];
//   }
//   // Create the output
//   const output = new Array(limit + 1).fill(true);
//   // Mark 0 and 1 as non-prime
//   output[0] = false;
//   output[1] = false;

//   // Iterate from 2 to the limit
//   for (let i = 2; i <= limit; i++) {
//     if (output[i] === true) {
//       // Mark all multiples of i as non-prime
//       for (let j = i * 2; j <= limit; j = j + i) {
//         output[j] = false;
//       }
//     }
//   }
//   // option 1:replace true values with the corresponding number value and filter out non-primes
//   return output.reduce((primes, current, index) => {
//     if (current) {
//       primes.push(index);
//     }
//     return primes;
//   }, []);
// };

// These are equivalent:
Math.pow(limit, 0.5); // raises limit to power of 0.5
Math.sqrt(limit); // finds square root of limit

// These are equivalent:
Math.pow(i, 2); // raises i to power of 2
i * i; // multiplies i by itself

const test = sieveOfEratosthenes(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);
