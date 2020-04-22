const price = 8;
const discountMap = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75
};

function generateSet(array) {
  return array.reduce((acc, book) => {
    return reduceSet(acc, book, 0);
  }, {});
}

function reduceSet(acc, book, idx) {
  if (!(idx in acc)) {
    acc[idx] = new Set([book]);
    return acc;
  } else if (!acc[idx].has(book)) {
    acc[idx].add(book);
    return acc;
  } else {
    return reduceSet(acc, book, idx + 1);
  }
}

function potter(books) {
  const sets = generateSet(books);
  return books && books.length > 0
    ? Object.values(sets).reduce((acc, set) => {
        return acc + set.size * price * discountMap[set.size];
      }, 0)
    : 0;
}

module.exports = potter;
