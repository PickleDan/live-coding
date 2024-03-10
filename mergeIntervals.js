const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const res = [intervals[0]]

    for (const interval of intervals) {
        const recentInterval = res[res.length - 1]

        if (interval[0] <= recentInterval[1]) {
            recentInterval[1] = Math.max(interval[1], recentInterval[0])
        } else {
            res.push(interval)
        }
    }

    return res
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
