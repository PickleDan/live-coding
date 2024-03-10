const singleNumber = (arr) => {
  const obj = arr.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item] += 1;
    }
    return acc;
  }, {});

  for (item of arr) {
    if (obj[item] === 1) {
      return item;
    }
  }
};

const singleNumber1 = (arr) => {
  const unique = [...new Set(arr)];

  const reduceSum = (sum, i) => sum + i;

  const sumOfUniques = unique.reduce(reduceSum);
  const sumOfArray = arr.reduce(reduceSum);

  return sumOfUniques * 2 - sumOfArray;
};

const arr = [2, 3, 2, 6, 3];
console.log(singleNumber1(arr));
