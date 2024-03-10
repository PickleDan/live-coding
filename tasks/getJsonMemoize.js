let count = 0;

const getData = () => Promise.resolve(++count);
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));


const memoize = (cb, delay) => {
  let lastInvokedTime = 0;
  let lastValue;

  return async () => {
    let now = Date.now();

    if (now - lastInvokedTime >= delay) {
      lastInvokedTime = now
      lastValue = await cb()
    }

    return lastValue
  }


};

const getJsonMemoize = memoize(getData, 1000);


(async () => {
  console.log(await getJsonMemoize()); // 1
  await sleep(700);
  console.log(await getJsonMemoize()); // 1
  await sleep(3000);
  console.log(await getJsonMemoize()); // 2
})();
