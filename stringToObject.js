const stringToObject = (str) => {
  const array = str.split(".");

  return array.reduceRight((acc, item, index, arr) => {
    acc = {
      [item]: acc,
    };

    return acc;
  }, {});
};

console.log(stringToObject("one.two.three.four.five"));

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: }
        }
      }
    }
  }
}
*/
