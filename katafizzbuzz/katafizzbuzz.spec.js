const fizzbuzz = require("./katafizzbuzz");

describe("Basic test", () => {
  it("should return undefined when call function without param", () => {
    expect(fizzbuzz()).toEqual(undefined);
  });
  it("should return the number passed in param", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
});
