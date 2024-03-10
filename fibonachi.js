const fibonachi = (n) => {
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1])
  }
  return result[n] ?? 0
}


// Оптимальное
const fibonachi2 = (n) => {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
}


const fibonachi3 = (n) => {
  if (n < 2) {
    return n
  }

  return fibonachi3(n - 2) + fibonachi3(n - 1)
}



// console.log(fibonachi(6));
// console.log(fibonachi2(6));
console.log(fibonachi3(6));
