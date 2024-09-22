//  TEST OUT AND LEARN PROVIDED SOLUTIONS HERE AFTER YOU HAVE YOUR OWN SOLUTION!!
// Check out the difference in the code visualizer between your solution and given solution

// Try Q1 using arrays for opening and closing symbols on your own - remember stack.length === 0 check in case first element is a closing bracket
console.log(validString("()")); // expect true
console.log(validString("[]({})")); // expect true
console.log(validString("{[}]")); // expect false
console.log(validString("{}[({[(]})]{[)]}")); // expect false -> second '(' has no corresponding closing
console.log(validString("{}[({[()]})]{[(())]}")); // expect true
