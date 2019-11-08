function foobarqix(n) {
  if (n % 3 === 0) {
    return "Foo";
  }
  if (n % 5 === 0) {
    return "Bar";
  }
  return n;
}

module.exports = foobarqix;
