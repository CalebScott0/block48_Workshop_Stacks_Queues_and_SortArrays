/*
 * Determine the validity of an input string s
 *      which comprises solely of the characters (, ), {, }, [, and ]. The software must verify the following conditions:
 *
 *  - The opening brackets must be correctly matched with the corresponding closing brackets of the same type.
 *  - The brackets must be closed in the correct order.
 *  - Each closing bracket should have a corresponding opening bracket of the same type.
 *
 * - Example:
 *  Input: s = "()" Output: true
 *  Input: s = "[]({})" Output: true
 *  Input: s = "{]}" Output: false - the closing bracket '}' does not have a corresponding opening bracket.
 *
 */
const validString = (str) => {
  // initialize a stack
  let stack = [];
  let result = false;
  //   iterate through string
  for (let i = 0; i < str.length; i++) {
    // push to stack until a closing bracket is reached
    if (str[i] === ")") {
      // for condition to be true innermost brackets most always close themselves with nothing in between
      const prevBracket = stack.pop();
      result = prevBracket === "(";
    } else if (str[i] === "}") {
      // for condition to be true innermost brackets most always close themselves with nothing in between
      const prevBracket = stack.pop();
      result = prevBracket === "}";
    } else if (str[i] === "]") {
      // for condition to be true innermost brackets most always close themselves with nothing in between
      const prevBracket = stack.pop();
      result = prevBracket === "[";
    } else {
      // push items to stack
      stack.push(str[i]);
    }
  }
  return result;
};

console.log(validString("()")); // expect true
console.log(validString("[]({})")); // expect true
console.log(validString("{]}")); // expect false
console.log(validString("{}[({[(]})]{[)]}")); // expect false
console.log(validString("{}[({[()]})]{[(())]}")); // expect true
