function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const promisesResult = [];
    let secondIndex = 0;

    for (let index in promises) {
      promises[index]
        .then((data) => {
          promisesResult.push(data);
          secondIndex++;
          if (secondIndex === promises.length) resolve(promisesResult);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
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
  resolve("first", 300),
  resolve("second", 500),
  resolve("third", 800),
]).then(console.log);
