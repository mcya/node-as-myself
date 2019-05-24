// const getNum = (value) => {
//   console.log("getNum-value:", value);
//   return value * 2
// }

const getNum = (value) => {
  if(value === 0) {
    return 1
  }else {
    return value * 2
  }
}

module.exports = getNum
