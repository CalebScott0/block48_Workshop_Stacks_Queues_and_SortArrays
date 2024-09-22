// merge sort = efficient method?
// Do with JS sort function after first solution complete

/*  calculates the minimum number of students who are not standing in the correct positions
 *   after the rearrangement.
 *   The function should return this minimum count.
 *
 * Example:
 *
 * Input: heights_array = [1,1,4,2,1,3]
 * Output: 3 = Correct order: [1, 1, 1, 2, 3, 4]
 *
 * Input: heights_array = [2,7,4,2,1,3]
 * Output: 6
 */

// Using selecction sort
const heightChecker = (heights, n) => {
  const copyArray = [...heights];
  let i,
    j,
    min_idx,
    count = 0;

  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      //find smallest idx in unsorted array
      if (heights[j] < heights[min_idx]) {
        min_idx = j;
        // count++
        // having count here FALLS APART IF THERE ARE MULTIPLE MINIMUMS IN AN ITERATION
      }
    }

    // Check if index to swap is not equal to unsorted boundary before swap
    if (min_idx !== i) {
      let temp = heights[min_idx];
      heights[min_idx] = heights[i];
      heights[i] = temp;
    }
  }
  // for each item in sorted array that does not match original array, increment count
  heights.forEach((_, i) => copyArray[i] !== heights[i] && count++);

  return count;
};

// Using insertion sort

const array1 = [3, 6, 4, 2, 2, 1, 4]; //expect 7
const example1 = heightChecker(array1, array1.length);
console.log(example1);

module.exports = { heightChecker };
