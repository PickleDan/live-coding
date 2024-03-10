const findVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  strSplitted = str.toLowerCase().split("");
  return strSplitted.reduce((acc, item) => {
    return vowels.includes(item) ? (acc += 1) : acc;
  }, 0);
};

const findVowels2 = (str) => {
  const matches = str.match(/[aeiouy]/gi);
  console.log("matches", matches);
  return matches ? matches.length : 0;
};

console.log(findVowels2("iAcd;k ojhbPI(UGUPI{JKOIjohf98ewjrpfuhU*HUIPJ{Oyndo"));
