// each person may only buy one ticket a time and then must go to the back of the qeue

// ** find a way to do this that does not empty the queue fully before next iteration **
// maybe with a map of index in line at the beginning and # of tickets
// and a queue to iterate through line?
// let queue = [...arr];
// let queue = Array(...arr);
// let queue = Array.from([...arr]);

const ticketTime = (arr, k) => {
  let queue = [];
  let count = 0;
  // perform queue operations until target index has bought all tickets
  while (arr[k] > 0) {
    // loop through array
    for (let i = 0; i < arr.length; i++) {
      // add people to queue who still have tickets to buy
      if (arr[i] !== 0) {
        queue.push(arr[i]);
        // decrement remaining tickets to buy
        arr[i]--;
        //   exit if target is at 0 after decrement to avoid going all through way back through array
        if (arr[k] === 0) break;
      }
    }
    // add 1 to count for each in line if target is not on their last ticket
    while (queue.length > 0) {
      queue.shift();
      //  add to count of time for each ticket sold if target is not at 0 in iteration
      count++;
    }
  }
  return count;
};

console.log(ticketTime([7, 1, 1, 1], (k = 0))); // expect 10
console.log(ticketTime([2, 3, 2], (k = 2))); // expect 6
module.exports = { ticketTime };
