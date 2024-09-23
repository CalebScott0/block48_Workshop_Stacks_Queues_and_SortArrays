const { sortQueue } = require("../q4");

describe("sortQueue", () => {
  it("Passes the given test", () => {
    expect(
      sortQueue([
        [8, 0],
        [5, 5],
        [9, 0],
        [5, 0],
        [6, 2],
        [5, 2],
      ])
    ).toEqual([
      [5, 0],
      [8, 0],
      [5, 2],
      [9, 0],
      [6, 2],
      [5, 5],
    ]);
  });
});
