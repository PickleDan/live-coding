// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

const minMaxInArray = (array) => {
  const max = array.reduce((acc, item) => {
    if (item > acc) {
      return item;
    } else {
      return acc;
    }
  }, null);

  const min = array.reduce((acc, item) => {
    if (item < acc) {
      return item;
    } else {
      return acc;
    }
  }, Infinity);

  return { min, max };
};

console.log(minMaxInArray([1, 2, 5, 7, 8, 5, 8, 4, 0, 99]));
