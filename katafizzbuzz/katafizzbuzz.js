function fizzbuzz(n) {
  if (n && Number.isNaN(parseInt(n, 10))) {
    throw new TypeError("param should be a number");
  }
  if (n % 3 === 0 || (n && n.toString().includes("3"))) {
    return n % 5 === 0 ? "FizzBuzz" : "Fizz";
  }
  if (n % 5 === 0 || (n && n.toString().includes("5"))) {
    return "Buzz";
  }
  return n;
}

module.exports = fizzbuzz;
