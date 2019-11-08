function foobarqix(n) {
  if (n % 3 === 0) {
    if (n % 5 === 0) {
      return "FooBar";
    }
    if (n % 7 === 0) {
      return "FooQix";
    }
    return "Foo";
  }
  if (n % 5 === 0) {
    return "Bar";
  }
  if (n % 7 === 0) {
    return "Qix";
  }
  return n;
}

module.exports = foobarqix;
