/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 3,
  },
  f: 4,
};

const flattenObject = (obj) => {
  const flattenObj = {};
  const stack = [{ obj, prefix: "" }];

  while (stack.length > 0) {
    const { obj, prefix } = stack.pop();

    for (let key in obj) {
      if (typeof obj[key] === "object" && typeof obj[key] !== null) {
        stack.push({ obj: obj[key], prefix: prefix + key + "." });
      } else {
        flattenObj[prefix + key] = obj[key];
      }
    }
  }

  return flattenObj;
};

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }
