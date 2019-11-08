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

describe("Simple discount", () => {
  it("should apply a 5% discount if I buy 2 different books", () => {
    expect(potter([0, 1])).toEqual(8 * 2 * 0.95);
    expect(potter([1, 2])).toEqual(8 * 2 * 0.95);
    expect(potter([2, 3])).toEqual(8 * 2 * 0.95);
    expect(potter([3, 4])).toEqual(8 * 2 * 0.95);
  });
  it("should apply a 10% discount if I buy 3 different books", () => {
    expect(potter([0, 1, 2])).toEqual(8 * 3 * 0.9);
    expect(potter([0, 1, 3])).toEqual(8 * 3 * 0.9);
    expect(potter([0, 1, 4])).toEqual(8 * 3 * 0.9);
  });
  it("should apply a 20% discount if I buy 4 different books", () => {
    expect(potter([0, 1, 2, 3])).toEqual(8 * 4 * 0.8);
    expect(potter([1, 2, 3, 4])).toEqual(8 * 4 * 0.8);
  });
  it("should apply a 25% discount if I buy the whole collection", () => {
    expect(potter([0, 1, 2, 3, 4])).toEqual(8 * 5 * 0.75);
  });
});
