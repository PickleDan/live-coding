

const notes = [100, 50, 20, 10]

const iWantToGet = (num) => {
  const result = [];

  if (num > 0) {
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i]

      while (num - note >= 0) {
        num -= note
        result.push(note)
      }
    }
  } else {
    console.log('no money');
  }

  return result
}

console.log(iWantToGet(260));