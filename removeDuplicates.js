const arr1 = [1, 1, 2]

const arr2 = [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 8, 8]

const removeDuplicates = (nums) => {
  return [...new Set(nums)]
}


console.log(removeDuplicates(arr2));
console.log(removeDuplicates(arr1));
