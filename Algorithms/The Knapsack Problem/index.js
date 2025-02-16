const recursiveKnapsack = function (weightCap, weights, values, i) {
  if (weightCap === 0 || i === 0) {
    return 0;
  } else if (weights[i - 1] > weightCap) {
    return recursiveKnapsack(weightCap, weights, values, i - 1);
  } else {
    const includeItem =
      values[i - 1] +
      recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
    const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
    return Math.max(includeItem, excludeItem);
  }
};

console.log(recursiveKnapsack(50, [10, 20, 30], [60, 100, 120], 3)); // 220

const dynamicKnapsack = function (weightCap, weights, values) {
  const numItem = weights.length;
  const matrix = new Array(numItem + 1); // +1 because we need a row for 0 items

  for (let index = 0; index <= numItem; index++) {
    matrix[index] = new Array(weightCap + 1);
    for (let weight = 0; weight <= weightCap; weight++) {
      // Fill first row and column with zeros
      if (index === 0 || weight === 0) {
        matrix[index][weight] = 0;
      }
      // If current item's weight is less than or equal to current weight capacity
      else if (weights[index - 1] <= weight) {
        // Find value by including current item
        const includeItem =
          values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
        // Find value by excluding current item
        const excludeItem = matrix[index - 1][weight];
        // Take maximum of including or excluding
        matrix[index][weight] = Math.max(includeItem, excludeItem);
      }
      // If item is too heavy, take value from excluding it
      else {
        matrix[index][weight] = matrix[index - 1][weight];
      }
    }
  }
  return matrix[numItem][weightCap];
};

const weightCap = 50;
const weights = [31, 10, 20, 19, 4, 3, 6];
const values = [70, 20, 39, 37, 7, 5, 10];
console.log(dynamicKnapsack(weightCap, weights, values));
// 107
