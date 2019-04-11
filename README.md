# node #

### 1. [XX0 基础篇](https://github.com/mcya/node-as-myself/tree/master/01_base(nodeJS一些日常化的知识点))

```bash
  - 关于node以及相关版本
  - 简单的环境布置和运行
  - 模块-自带和自定义
      (module.exports/exports)
  - npm scripts
      (npm常见使用规则/一些常见的简写形式)
        (npm start 即 npm run start)
        (使用&&可连续执行命令，如，npm run build:dll && npm start)
  - forever
    forever是一个简单的命令式nodejs的守护进程，能够启动，停止，重启App应用.
```

### 2.Node.js API及常用第三方模块(HTTP+net+URL+querystring+events+fs+stream+cheerio+anyproxy抓包+mocha单元测试)
#### 2.1 [http 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi(HTTP+net+URL+querystring+events+fs+stream+cheerio+anyproxy抓包+mocha单元测试)/02_01_http)
```bash
所有后端动态语言要想运行起来，都得先搭建服务器。Node.js 搭建服务器需要用到一个原生的模块 http。
1. 加载 http 模块
2. 调用 http.createServer() 方法创建服务，方法接受一个回调函数，回调函数中有两个参数，第一个是请求体，第二个是响应体。
3. 在回调函数中一定要使用 response.end() 方法，用于结束当前请求，不然当前请求会一直处在等待的状态。
4. 调用 listen 监听一个端口。

如果是常规开发，在我们执行`npm install`的时候就已经在包中写好。
```
```js
// http.createServer 格式
http.createServer(function(reqeust, response){
  //第二个参数response（可省）传入一个布尔值，默认为false，为true时，返回的url对象中，query的属性为一个对象
}).listen(3000)


// or
var app = function(req, res) { };
http.createServer(app).listen(3000);

```

#### 2.2 [net 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi(HTTP+net+URL+querystring+events+fs+stream+cheerio+anyproxy抓包+mocha单元测试)/02_02_net)

在Node中，net模块提供创建基于TCP协议的网络通信的API。
```js
// 基本构建步骤

// 1.引入内置的net模块
var net = require("net");

// createServer创建一个 TCP 服务器:
// [其他相关事件点击文档继续查看]
var server = net.createServer( function (socket) {

  //新的连接
  socket.on('data', function (data) {
    socket.write("您好")
  });

  socket.on('end', function () {
    console.log('连接断开')
  });

  socket.write("实例: \n");
});

server.listen(8124, function () {
  console.log('server bound');
});
```



#### 2.3 [url 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi(HTTP+net+URL+querystring+events+fs+stream+cheerio+anyproxy抓包+mocha单元测试)/02_03_url)
