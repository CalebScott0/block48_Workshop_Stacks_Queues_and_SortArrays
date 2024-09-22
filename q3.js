/* Is there a way to do this without looping through the whole
 * array at the end to check differences?
 */
// merge sort = efficient method?

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

const swap = (arr, xp, yp) => {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
};

// compare all 4 methods in code visualizer!!

// Using bubble sort
const bubbleSort = (heights, n) => {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // compare and swap if right element is greater
      if (heights[j] > heights[j + 1]) {
        swap(heights, j, j + 1);
      }
    }
  }
  return heights;
};

const heightChecker = (array) => {
  const copyArray = [...array];
  let count = 0;
  const sortedArray = bubbleSort(array, array.length);
  sortedArray.forEach((_, i) => sortedArray[i] !== copyArray[i] && count++);
  return count;
};

const array1 = [3, 6, 4, 2, 2, 1, 4]; //expect 7
const example1 = heightChecker(array1, array1.length);
console.log(example1);

// using JS sort
// const heightChecker = (heights, n) => {
//   let count = 0;
//   const copyArray = [...heights];
//   heights.sort((a, b) => (a < b ? -1 : 1));
//   heights.forEach((_, i) => copyArray[i] !== heights[i] && count++);
//   return count;
// };

// Using insertion sort
// const insertionSort = (heights, n) => {
//   for (let i = 1; i < n; i++) {
//     // current element to check
//     let key = heights[i];
//     // predecessor to check against
//     let j = i - 1;
//     // compare to all elements before key and shift up 1 if smaller
//     while (j >= 0 && heights[j] > key) {
//       heights[j + 1] = heights[j];
//       j--;
//     }
//     heights[j + 1] = key;
//   }
//   return heights;
// };
// const heightChecker = (array) => {
//   let count = 0;
//   const copyArray = [...array];
//   let sortedArray = insertionSort(array, array.length);
//   sortedArray.forEach((_, i) => copyArray[i] !== array[i] && count++);
//   return count;
// };

// Using selection sort
// const heightChecker = (heights, n) => {
//   const copyArray = [...heights];
//   let i,
//     j,
//     min_idx,
//     count = 0;

//   for (i = 0; i < n - 1; i++) {
//     min_idx = i;
//     for (j = i + 1; j < n; j++) {
//       //find smallest idx in unsorted array
//       if (heights[j] < heights[min_idx]) {
//         min_idx = j;
//         /* count++
//          * having count here FALLS APART IF THERE ARE MULTIPLE MINIMUMS IN AN ITERATION
//          * i.e will count more than once before swap occurs
//          */
//       }
//     }

//     // Check if index to swap is not equal to unsorted boundary before swap
//     if (min_idx !== i) {
//       let temp = heights[min_idx];
//       heights[min_idx] = heights[i];
//       heights[i] = temp;
//     }
//   }
//   // for each item in sorted array that does not match original array, increment count
//   heights.forEach((_, i) => copyArray[i] !== heights[i] && count++);

//   return count;
// };

module.exports = { heightChecker };
