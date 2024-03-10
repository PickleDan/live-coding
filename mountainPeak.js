let arr1 = [1, 2, 3, 4, 3, 2, 1];
let arr2 = [11, 13, 14, 15, 6, 4, 2];
let arr3 = [10, 9, 8, 7, 6];

const peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return start;
};

console.log(peakIndexInMountainArray(arr1));
