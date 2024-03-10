Array.prototype.myFilter = function (callback) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        const isTruth = callback(this[i], i, this)

        if (!isTruth) continue

        result.push(this[i])
    }

    return result
}


console.log('### my filter', [1, 2, 3, 4, 5].myFilter((item) => {
    return item % 2 == 0
}))
