const { heightChecker } = require("../q3");

describe("heightChecker", () => {
  it("Passes test 1", () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3], 6)).toEqual(3);
  });
  it("Passes test 2", () => {
    expect(heightChecker([2, 7, 4, 2, 1, 3], 6)).toEqual(6);
  });
  it("Passes test 3", () => {
    expect(heightChecker([3, 6, 4, 2, 2, 1, 4], 7)).toEqual(7);
  });
});
