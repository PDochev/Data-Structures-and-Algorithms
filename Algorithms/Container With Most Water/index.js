// Time Complexity - Quadratic Time - O(n^2) , because of the nested loops
// Space complexity - Constant space - O(1)
function maxArea(height) {
  let maxArea = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // This is the distance between the buildings
      const width = j - i;

      // We take the height of the shorter building because the tightrope must be spanned between two buildings,
      // and the area beneath the rope is constrained by the shorter of the two.
      const buildingHeight = Math.min(height[i], height[j]);
      // Calculate the area
      const area = width * containerHeight;
      // Update maxArea if current area is larger
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxAreaNaive(arr));
// 49
