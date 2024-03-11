const factorial = (n) => {
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res = res * i;
  }

  return res;
};

// program to find the factorial of a number
function factorialRecursion(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}

console.log(factorialRecursion(7));
