// Мое решение (не оптимально)
const sumOfTwo = (arr, target) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return `${arr[i]} + ${arr[j]} = ${target}`;
      }
    }
  }
  return "No solution";
};

const sumOfTwo2 = (arr, target) => {
  const numObject = {};

  for (let i = 0; i < arr.length; i++) {
    numObject[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (numObject[diff] && numObject[diff] !== i) {
      return [i, numObject[diff]];
    }
  }

  return [];
};

console.log(sumOfTwo2([2, 7, 11, 15, 7], 14));
