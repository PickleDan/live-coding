Array.prototype.myReduce = function (callback, initialValue) {
  const isInitialValueExist = Boolean(initialValue);

  let acc = isInitialValueExist ? initialValue : this[0];

  for (let i = 0; i < this.length; i++) {
    if (isInitialValueExist && i === 0) continue;

    acc = callback(acc, this[i]);
  }

  return acc;
};

console.log(
  "myReduce",
  [1, 2, 3, 4, 5].reduce((acc, item) => {
    return acc + item;
  }),
);
