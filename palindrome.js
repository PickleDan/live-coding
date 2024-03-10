// Проверить, является ли заданная строка палиндромом. Сейчас популярно усложнять данную задачу.
// Добавим условие, которое будет игнорировать символы пробела, знаков препинания и пр. Также будем игнорировать регистр.

const checkIsPalindrome = (str) => {
    const strLowered = str.toLowerCase().replace(/[\s,;']/g, '')
    const strReversed = strLowered.split('').reverse().join('')

    console.log({strLowered, strReversed})

    return strReversed === strLowered

}


console.log(checkIsPalindrome('Казак'));
console.log(checkIsPalindrome('Madam, I\'m Adam'));
