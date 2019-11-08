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
  let str = "";
  n &&
    Array.from(n.toString()).forEach(v => {
      if (v === "3") str += "Foo";
      if (v === "5") str += "Bar";
      if (v === "7") str += "Qix";
    });
  return str || n;
}

module.exports = foobarqix;
