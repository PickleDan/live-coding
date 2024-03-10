/*

{
  f: 1,
  a: 4,
  y: 2,
  .
  .
  .
}

*/

const buildCharObject = (str) => {
  const preparedStr = str
    .toLowerCase()
    .replace([/[\s,;']/g], "")
    .split("");
  return preparedStr.reduce((acc, item) => {
    if (item in acc) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
};

const anagram = (str1, str2) => {
  const hash1 = buildCharObject(str1);
  const hash2 = buildCharObject(str2);

  if (Object.keys(hash1).length !== Object.keys(hash2).length) return false;

  for (const key in hash1) {
    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }

  return true;
};

const anagram2 = (a, b) =>
  [...a.toLowerCase()].sort().toString() ===
  [...b.toLowerCase()].sort().toString();

console.log(anagram("friend", "Finder"));
