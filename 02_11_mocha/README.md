# TDD与BDD的区别

TDD属于测试驱动开发，BDD属于行为驱动开发。
个人理解其实就是TDD先写测试模块，再写主功能代码，然后能让测试模块通过测试，而BDD是先写主功能模块，再写测试模块

# 目录结构

```
.
├── index.js
├── node_modules
├── package.json
└── test
    └── test.js
```


# mocha

安装mocha
```js
npm install mocha -g // 需要在全局下安装Mocha
npm install mocha chai --save-dev // 执行后会在当前目录生成 coverage、test 两个文件夹
```

新建`index.js`
```js
const getNum = (value) => {
  return value * 2
}

module.exports = getNum
```

新建一个`test`文件夹放入`test.js`，以后可以在这里写其他单元测试的文件，`describe()`用于给测试用例分组，`it`代表一个测试用例
```js
const chai = require('chai')
const expect = chai.expect
const getNum = require('../index')

// describe 会默认生成，可以不用更改
describe('Test', function() {
  it('should return 20 when the value is 10', function() {
      expect(getNum(10)).to.equal(20)
  })
})
```

项目目录下运行`test.js`
```js
mocha
```

----------------------------------------------------------


# istanbul

完成代码测试之后我们再去看看代码测试的覆盖率。测试代码覆盖率我们选择使用istanbul，全局安装

```js
npm install -g istanbul
```
使用istanbul启动Mocha
```js
istanbul cover _mocha //执行后会在 终端/cmd 显示出 Coverage summary 同时 coverage 文件夹会生成结果文件
```

- 行覆盖率（Line coverage）：是否每一行都执行了？
- 函数覆盖率（Function coverage）：是否每个函数都调用了？
- 分支覆盖率（Branch coverage）：是否每个if代码块都执行了？
- 语句覆盖率（Statement coverage）：是否每个语句都执行了？

修改`index.js`再看代码覆盖率
```js
const getNum = (value) => {
  if(value === 0) {
    return 1
  }else {
    return value * 2
  }
}

module.exports = getNum
```

修改`test.js`添加测试用例
```js
describe('Test', function() {
  it('should return 20 when the value is 10', function() {
      expect(getNum(10)).to.equal(20)
  })
  it('should return 1 when the value is 0', function() {
    expect(getNum(0)).to.equal(1)
  })
})
```
代码覆盖率又回到了100%

### 以上部分，均为服务端代码测试

### 客户端代码测试

index.js
```js
window.createDiv = function(value) {
  var oDiv = document.createElement('div')
  oDiv.id = 'myDiv'
  oDiv.innerHTML = value
  document.body.appendChild(oDiv)
}
```

test.js
```js
mocha.ui('bdd')

var expect = chai.expect
describe("Tests", function () {
  before(function () {
    createDiv('test')
  })
  it("content right", function () {
    var el = document.querySelector('#myDiv')
    expect(el).to.not.equal(null)
    expect(el.innerHTML).to.equal("test")
  })
})

mocha.run()
```

新建 `test.html`
```html
<html>
   <head>
     <title> Tests </title>
     <link rel="stylesheet" href="../node_modules/mocha/mocha.css"/>
   </head>
   <body>
     <div id="mocha"></div>
     <script src="../node_modules/mocha/mocha.js"></script>
     <script src="../node_modules/chai/chai.js"></script>
     <script src="../index.js"></script>
     <script src="./test.js"></script>
   </body>
 </html>
```

##### 最后 直接用浏览器打开test.html文件便能看到测试结果

# 参考文档

- [前端单元测试](https://segmentfault.com/a/1190000013470485)
