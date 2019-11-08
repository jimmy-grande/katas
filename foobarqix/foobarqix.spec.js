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
    expect(foobarqix(6)).toEqual("Foo");
    expect(foobarqix(9)).toEqual("Foo");
    expect(foobarqix(30)).toEqual("Foo");
  });
});

describe("Implement the rule divisible by 5", () => {
  it("should return Foo if number is divisible by 5", () => {
    expect(foobarqix(5)).toEqual("Bar");
    expect(foobarqix(10)).toEqual("Bar");
    // expect(foobarqix(15)).toEqual("Bar");
    expect(foobarqix(20)).toEqual("Bar");
  });
});

describe("Implement the rule divisible by 7", () => {
  it("should return Foo if number is divisible by 7", () => {
    expect(foobarqix(7)).toEqual("Qix");
    expect(foobarqix(14)).toEqual("Qix");
    expect(foobarqix(28)).toEqual("Qix");
  });
});
