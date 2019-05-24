const chai = require('chai')
const expect = chai.expect
const getNum = require('../index')

// 可以在这里写其他单元测试的文件，`describe()`用于给测试用例分组，`it`代表一个测试用例
// describe('Test', function () {
//     it('should return 20 when the value is 10', function () {
//         console.log("you are my super start")
//         expect(getNum(10)).to.equal(20)
//     })
// })

describe('Test', function () {
    it('should return 20 when the value is 10', function () {
        console.log("you are my super start")
        expect(getNum(10)).to.equal(20)
    })
    it('should return 1 when the value is 0', function () {
        console.log("支持华为！打倒美国！")
        expect(getNum(0)).to.equal(1)
    })
})
