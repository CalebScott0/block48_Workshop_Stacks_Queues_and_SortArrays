// sort plus queue?
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

// ** NOT SOLVED YET!!

const sortedArr = arr.sort((a, b) => (a[1] > b[1] ? 1 : -1));
const sortedArr2 = arr.sort((a, b) => (a[0] < b[0] ? 1 : -1));
// [ [ 5, 2 ], [ 5, 0 ], [ 5, 5 ], [ 6, 2 ], [ 8, 0 ], [ 9, 0 ] ]
const sort = (array) => {
  return array
  // insertion sort to move elements into correct position based on value and second index
  for (let i = 0; i < array.length - 1; i++) {
    // second index is the amount of items[0] before it that need to be greater or equal
    let timesToMove = array[i][1];
    // move item at current idx until it has passed x elements >= current
    let j = i;
    while (j > 0 && j < array.length - 1) {
      if (array[j + 1][0] >= array[j][0]) {
        
        //   if (array[j + 1][0] >= array[j][0] && j < array.length - 1) {
        timesToMove--;
      }
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j;
    }
  }
  return array;
};
console.log(sort(sortedArr2));


