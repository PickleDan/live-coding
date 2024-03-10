
// Мое решение
const currencies = (currenciesDisordered) => {
  const computedTransactions = currenciesDisordered.reduce((acc, item) => {
    if (!acc[item[0]]) {
      acc[item[0]] = {
        buy: item[1] === 'buy' && item[2] || 0,
        sell: item[1] === 'sell' && item[2] || 0
      }
    } else {
      item[1] === 'buy' ? acc[item[0]].buy += item[2] : acc[item[0]].sell += item[2]
    }
    return acc
  }, {})
  return Object.entries(computedTransactions).reduce((acc, [key, value]) => {
    acc[key] = [value.buy, value.sell]
    return acc
  }, {})
}

// Решение за один проход
const currencies1 = (currenciesDisordered) => {
  let result = {}
  currenciesDisordered.forEach(([currency, type, amount]) => {
    if (!result[currency]) {
      result[currency] = [0, 0]
    }
    result[currency][type === 'buy' ? 0 : 1] += amount
  })

  return result
}


const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gbp', 'buy', 9000],
  ['eur', 'sell', 7000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 25000]
]

const output = {
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  uah: [10000, 0]
}

console.log(currencies(input));
console.log(currencies1(input));