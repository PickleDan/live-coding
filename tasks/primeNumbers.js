function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2, max = Math.sqrt(num); i < max; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Простой вар O(n**)
function getPrimeNumbers(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

// Решето Эратосфена
function getPrimes(num) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }

  return primes;
}

console.log(isPrime(127));
console.log(getPrimeNumbers(120));
console.log(getPrimes(120));
