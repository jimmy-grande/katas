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

describe("Handle multiple of 3 & 5", () => {
  it("should return FizzBuzz when param a multiple of 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
    expect(fizzbuzz(45)).toEqual("FizzBuzz");
  });
});

describe("Handle number containing 3", () => {
  it("should return Fizz when param contains 3", () => {
    expect(fizzbuzz(13)).toEqual("Fizz");
    expect(fizzbuzz(31)).toEqual("Fizz");
  });
});

describe("Handle number containing 5", () => {
  it("should return Buzz when param contains 5", () => {
    expect(fizzbuzz(52)).toEqual("Buzz");
    expect(fizzbuzz(152)).toEqual("Buzz");
  });
});

describe("Handle bad parameter", () => {
  it("should throw a TypeError if param is not a number", () => {
    expect(() => {
      fizzbuzz("yolo");
    }).toThrowError(TypeError);
  });
});
