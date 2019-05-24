
// 服务端代码测试

// b-1
// const getNum = (value) => {
//   console.log("getNum-value:", value);
//   return value * 2
// }

// b-2 + a-1 = {Branches: 50%, Lines}
// const getNum = (value) => {
//   if(value === 0) {
//     return 1
//   }else {
//     return value * 2
//   }
// }
//
// module.exports = getNum



// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// 客户端代码测试

window.createDiv = function(value) {
  var oDiv = document.createElement('div')
  oDiv.id = 'myDiv'
  oDiv.innerHTML = value
  document.body.appendChild(oDiv)
}
