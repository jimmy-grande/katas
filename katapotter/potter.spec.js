const potter = require("./potter");

describe("Basic test", () => {
  it("should return 0 if I buy nothing", () => {
    expect(potter([])).toEqual(0);
  });

  it("should return 8 if I buy 1 book of the serie", () => {
    expect(potter([0])).toEqual(8 * 1);
    expect(potter([1])).toEqual(8 * 1);
    expect(potter([2])).toEqual(8 * 1);
    expect(potter([3])).toEqual(8 * 1);
    expect(potter([4])).toEqual(8 * 1);
  });
  it("should return 8 * 2 if I buy 2 identicals books", () => {
    expect(potter([0, 0])).toEqual(8 * 2);
    expect(potter([1, 1])).toEqual(8 * 2);
    expect(potter([2, 2])).toEqual(8 * 2);
    expect(potter([3, 3])).toEqual(8 * 2);
    expect(potter([4, 4])).toEqual(8 * 2);
  });
});
