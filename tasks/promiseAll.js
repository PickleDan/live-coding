promiseAll = (promises) => {
  const result = []

  return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((resolved) => {
          result.push(resolved)

          if (promises.length - 1 === index) {
            resolve(result)
          }
        }, reject)
      })
  })
}
const resolve = (value, timeout) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(value);
    }, timeout);
  });
};

const reject = (value, timeout) => {
  return new Promise((_, rej) => {
    setTimeout(() => {
      rej(value);
    }, timeout);
  });
};

promiseAll([
  1,
  resolve("first", 300),
  resolve("second", 500),
  resolve("third", 800),
]).then(console.log);



