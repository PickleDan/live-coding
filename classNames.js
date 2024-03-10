

const buildClassNamesObject = (cn) =>
  cn.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    } else acc[item] += 1
    return acc
  }, {})

const classNames = (cn) => {
  const classNamesObject = buildClassNamesObject(cn)
  return Object.entries(classNamesObject).sort((a, b) => b[1] - a[1]).reduce((acc, item) => [...acc, item[0]], [])
}

console.log(classNames(['header', 'menu', 'footer', 'menu', 'item', 'header', 'menu']));