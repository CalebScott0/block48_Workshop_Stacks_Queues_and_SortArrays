const { validString } = require("../q1");

describe("validString", () => {
  it("Passes test 1", () => {
    expect(validString("()")).toEqual(true);
  });
  it("Passes test 2", () => {
    expect(validString("{}")).toEqual(true);
  });
  it("Passes test 3", () => {
    expect(validString("[]")).toEqual(true);
  });
  it("Passes test 4", () => {
    expect(validString("[]({})")).toEqual(true);
  });
  it("Passes test 5", () => {
    expect(validString("{]}")).toEqual(false);
  });
  it("Passes test 6", () => {
    expect(validString("{}[({[(]})]{[)]}")).toEqual(false);
  });
  it("Passes test 7", () => {
    expect(validString("{}[({[()]})]{[(())]}")).toEqual(true);
  });
  it("Passes test 8", () => {
    expect(validString("{[}]")).toEqual(false);
  })
});
