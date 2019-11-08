const foobarqix = require("./foobarqix");

describe("Basic test", () => {
  it("should return undefined when call function without param", () => {
    expect(foobarqix()).toEqual(undefined);
  });
  it("should return the number passed in param", () => {
    expect(foobarqix(1)).toEqual(1);
  });
});

describe("Implement the rule divisible by 3", () => {
  it("should return Foo if number is divisible by 3", () => {
    expect(foobarqix(3)).toEqual("Foo");
  });
});
