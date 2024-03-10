async function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

(async () => {
    console.log("Начало");
    await sleep(2000); // Приостанавливаем выполнение на 2 секунды
    console.log("Прошло 2 секунды");
})()

