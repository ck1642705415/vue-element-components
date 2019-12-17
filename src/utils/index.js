export const objToArray = (nameObj, valueObj) => {
  let arr = []
  Object.keys(nameObj).forEach(key => {
    Object.keys(valueObj).forEach(valKey => {
      if (key === valKey) {
        arr.push({name: nameObj[key], value: valueObj[valKey]})
      }
    })
  })
  return arr
}
