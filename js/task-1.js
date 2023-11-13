function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  const productsValue = Object.values(products);

  for (const product of productsValue) {
    totalProducts += product;
  }

  if (totalProducts <= containerSize) {
    return true;
  } else {
    return false;
  }
};


console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false