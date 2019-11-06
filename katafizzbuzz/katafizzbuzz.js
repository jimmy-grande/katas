function fizzbuzz(n) {
  if (n % 3 === 0) {
    return n % 5 === 0 ? "FizzBuzz" : "Fizz";
  }
  if (n % 5 === 0) {
    return "Buzz";
  }
  return n;
}

module.exports = fizzbuzz;
