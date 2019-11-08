const price = 8;
const discountMap = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75
};

function potter(books) {
  const nbUniq = new Set(books).size;
  return nbUniq ? books.length * discountMap[nbUniq] * price : 0;
}

module.exports = potter;
