// each person may only buy one ticket a time and then must go to the back of the qeue

const ticketTime = (arr, k) => {
  // let queue = [...arr];
  let queue = [];
  let count = 0;
  // perform queue operations until target index has bought all tickets
  while (arr[k] > 0) {
    // loop through array
    for (let i = 0; i < arr.length; i++) {
      // add people who still have tickets to buy if target is not at 0
      if (arr[k] !== 0 && arr[i] !== 0) {
        queue.push(arr[i]);
        // decrement remaining tickets to buy
        arr[i]--;
        //   exit if target is at 0 to avoid going all through way back through array
        if (arr[k] === 0) {
          while (queue.length > 0) {
            queue.shift();
            count++;
          }
          return count;
        }
      }
    }
    while (queue.length > 0) {
      queue.shift();
      //  add to count of time for each ticket sold if target is not at 0 in iteration
      count++;
    }
  }
};

console.log(ticketTime([7, 1, 1, 1], (k = 0))); // expect 10
console.log(ticketTime([2, 3, 2], (k = 2))); // expect 6
module.exports = { ticketTime };
