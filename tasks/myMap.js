Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// console.log('### map', [1, 2, 3, 4, 5].map((item) => {
//     return item * 2
// }))

console.log(
  "### my map",
  [1, 2, 3, 4, 5].myMap((item, index, array) => {
    return item * 2;
  }),
);
