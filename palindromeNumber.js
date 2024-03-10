const palindromeNumber = (num) => {
  if (num < 0) return false;

  str1 = num.toString();
  str2 = num.toString().split("").reverse().join("");
  return str1 === str2;
};

const palindromeNumber1 = (num) => {
  if (num < 0) return false;
  if (num % 10 === 0) return false;
  if (x < 10) return true;

  let rev = 0;

  while (x > rev) {
    rev *= 10;
    rev += x % 10;
    x = Math.trunc(x / 10);
  }

  return x === rev || x === Math.trunc(rev / 10);
};

console.log(palindromeNumber1(1221));
