// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (array) => {
    return array.reduce((acc, item) => {
        if (item.city in acc) {
            acc[item.city] = [...(Array.isArray(acc[item.city]) ? acc[item.city] : [acc[item.city]]), item.name]
        } else {
            acc[item.city] = item.name
        }

        return acc
    }, {})
}

console.log("### groupByCity", groupByCity(people))

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/
