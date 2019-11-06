const fizzbuzz = require("./katafizzbuzz");

describe("Basic test", () => {
  it("should return undefined when call function without param", () => {
    expect(fizzbuzz()).toEqual(undefined);
  });
  it("should return the number passed in param", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
});

describe("Handle multiple of 3", () => {
  it("should return Fizz when param is a multiple of 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(6)).toEqual("Fizz");
    expect(fizzbuzz(9)).toEqual("Fizz");
    expect(fizzbuzz(12)).toEqual("Fizz");
  });

  it("should return Fizz when param a is multiple of 3 and negative", () => {
    expect(fizzbuzz(-3)).toEqual("Fizz");
    expect(fizzbuzz(-9)).toEqual("Fizz");
  });
});

describe("Handle multiple of 5", () => {
  it("should return Buzz when param a multiple of 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
});
