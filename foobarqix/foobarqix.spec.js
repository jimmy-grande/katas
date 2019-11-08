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
  });
});

describe("Implement the rule divisible by 5", () => {
  it("should return Bar if number is divisible by 5", () => {
    expect(foobarqix(5)).toEqual("Bar");
    expect(foobarqix(10)).toEqual("Bar");
    expect(foobarqix(20)).toEqual("Bar");
  });
});

describe("Implement the rule divisible by 7", () => {
  it("should return Qix if number is divisible by 7", () => {
    expect(foobarqix(7)).toEqual("Qix");
    expect(foobarqix(14)).toEqual("Qix");
    expect(foobarqix(28)).toEqual("Qix");
  });
});

describe("Implement combined '%' rules", () => {
  it("should return FooBar if number is divisible by 3 and 5", () => {
    expect(foobarqix(15)).toEqual("FooBar");
    expect(foobarqix(30)).toEqual("FooBar");
    expect(foobarqix(45)).toEqual("FooBar");
  });
  it("should return FooQix if number is divisible by 3 and 7", () => {
    expect(foobarqix(21)).toEqual("FooQix");
    expect(foobarqix(42)).toEqual("FooQix");
  });
});

describe("Implement the rule replace 3 by Foo", () => {
  it("should return Foo when it contains 3 and not %3", () => {
    expect(foobarqix(13)).toEqual("Foo");
  });
});

describe("Implement the rule replace 5 by Bar", () => {
  it("should return Bar when it contains 5 and not %5", () => {
    expect(foobarqix(52)).toEqual("Bar");
  });
});

describe("Implement the rule replace 7 by Qix", () => {
  it("should return Qix when it contains 5 and not %5", () => {
    expect(foobarqix(17)).toEqual("Qix");
  });
});

describe("Implement combined replaced rules", () => {
  it("should return FooBar if number contains 3 and 5", () => {
    expect(foobarqix(53)).toEqual("BarFoo");
  });
  it("should return BarFoo if number contains 5 and 3", () => {
    expect(foobarqix(53)).toEqual("BarFoo");
  });
  it("should return FooQix if number contains 3 and 7", () => {
    expect(foobarqix(37)).toEqual("FooQix");
  });
  it("should return QixFoo if number contains 7 and 3", () => {
    expect(foobarqix(73)).toEqual("QixFoo");
  });
});
