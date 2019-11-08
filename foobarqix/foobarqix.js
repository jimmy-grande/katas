function foobarqix(n) {
  let str = "";
  if (n % 3 === 0) str += "Foo";
  if (n % 5 === 0) str += "Bar";
  if (n % 7 === 0) str += "Qix";
  n &&
    Array.from(n.toString()).forEach(v => {
      if (v === "3") str += "Foo";
      if (v === "5") str += "Bar";
      if (v === "7") str += "Qix";
    });
  return str || n;
}

module.exports = foobarqix;
