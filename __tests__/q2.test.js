const { ticketTime } = require("../q2");

describe("ticketTime", () => {
  it("Passes test 1", () => {
    expect(ticketTime([7, 1, 1, 1], 0)).toEqual(10);
  });
  it("Passes test 2", () => {
    expect(ticketTime([2, 3, 2], 2)).toEqual(6);
  });
  it("Passes test 3", () => {
    expect(ticketTime([4, 2, 3, 6], 2)).toEqual(10);
  });
  it("Passes test 4", () => {
    expect(ticketTime([4, 2, 3, 6, 4, 3, 2, 4, 5], 2)).toEqual(20);
  });
});
