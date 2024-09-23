/* Each person is represented by a pair of integers
 * where the first integer is the person's height
 * and the second integer is the number of people in front
 *  of this person who have a height greater than or equal to theirs
 */
/*
 * Example:
 * Input: [ [8, 0], [5, 5], [9, 0], [5, 0], [6, 2], [5, 2] ]
 * Output: [ [ 5, 0 ], [ 8, 0 ], [ 5, 2 ], [ 9, 0 ], [ 6, 2 ], [ 5, 5 ] ]
 */

const arr = [
  [8, 0],
  [5, 5],
  [9, 0],
  [5, 0],
  [6, 2],
  [5, 2],
];

// Try finding another solution at the bottom besides splice?

// const sortedArr = arr.sort((a, b) => (a[1] < b[1] ? 1 : -1));
// const sortedArr2 = arr.sort((a, b) => (a[0] < b[0] ? 1 : -1));
// 2 sorts above produces below array that can be sorted into final answer
// [ [ 9, 0 ], [ 8, 0 ], [ 6, 2 ], [ 5, 0 ], [ 5, 2 ], [ 5, 5 ] ]
// sort without sort function =  [array[j - 1], array[j]] = [array[j], array[j - 1]] to swap items in nested array
// -> second idx sorted in decreasing order, and then first idx sorted in decreasing order
/* -> this can be broken apart into sorting [0] if first idx of compare element doesn't match
 *      or sorting [1] if first idxs do match
 *      done as an insertion sort?
 */

const sortQueue = (array) => {
  // function to swap items in array
  const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };
  // insertion sort to move elements into correct position based on value and second idx
  for (let i = 1; i < array.length; i++) {
    // j to represent sorted boundary to check against decrementally for insertion sort
    // sortCheck will terminate while loop if either first index of predecessor is greater than or equal to first idx of j
    // or if second index of predecessor is less than or equal to second idx of j
    let j = i;
    let sortCheck = true;
    while (j > 0 && sortCheck) {
      // check if first item in inner array item equals predecessor to determine sort type
      // if second index item of predecessor is greater than j, swap
      if (array[j - 1][0] === array[j][0] && array[j - 1][1] > array[j][1]) {
        swap(array, j - 1, j);
        j--;
        // if first indexes are not equal, sort based on first index, greater values towards the front
      } else if (
        array[j - 1][0] !== array[j][0] &&
        array[j - 1][0] < array[j][0]
      ) {
        swap(array, j - 1, j);
        j--;
      } else {
        sortCheck = false;
      }
    }
  }
  // check what sorted array equals before placing in new queue
  // console.log(array);
  const newQueue = [];
  array.forEach((item) => {
    // index to insert into new queue
    let idx = item[1];
    console.log(idx);
    // splice below, first parameter is index of the array to start deletion/insertion
    // 0 = numbers of items to delete as we want to add to array
    // item is current array value to insert at idx of newQueue
    newQueue.splice(idx, 0, item);
  });
  return newQueue;
};
console.log(sortQueue(arr));

module.exports = { sortQueue };
