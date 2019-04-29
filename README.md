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
#### 2.1 [http 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi/02_01_http)
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
```js
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(reqeust, response){
	var urlObj = url.parse(reqeust.url, false);
	var query = urlObj.query;
	console.log(query);
	response.end('Hello Node');
}).listen(8010);

// 运行效果
/*
  node *.js 后浏览器输入 http://localhost:8010/ 页面就会显示 【Hello Node】
*/

```

#### 2.2 [net 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi/02_02_net)

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



#### 2.3 [url 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi/02_03_url)
请求的 url 都是字符串类型，url 所包含的信息也比较多，比如有：协议、主机名、端口、路径、参数、锚点等，如果对字符串解析这些信息的话，会相对麻烦，因此，Node.js 的原生模块 url 模块便可轻松解决这一问题

`url.parse 将一个地址URL解析成对象的格式 - 字符串转对象`

`url.format 将一个对象格式转换成URL地址 - 对象转字符串`
```js
var url = require('url');

//第二个参数为 true => {a: 'index', t: 'article', m: 'default'} - //urlObj.query 为一个对象
var urlObj = url.parse('http://www.dk-lan.com/one?a=index&t=article&m=default#dk', true);
console.log(urlObj);

//第二个参数为 false - //urlObj.query 为一个字符串 => ?a=index&t=article&m=default
urlObj = url.parse('http://www.dk-lan.com/one?a=index&t=article&m=default#dk', false);
console.log(urlObj);

var urlObj = {
  protocol: 'http:',
  slashes: true,
  hostname: 'dk-lan.com',
  port: 80,
  hash: '#hash',
  search: '?query=string',
  path: '/nodejs?query=string'
}
var result = url.format(urlObj);
console.log(result);
```

#### 2.4 [querystring 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi/02_04_querystring)
GET 请求时参数都来自 URL，而 URL 都是字符串格式，为了方便操作，可以把字符串格式的参数通过 querystring 转换格式

```js
var querystring = require('querystring');

var obj={firstname:"dk",url:"http://dk-lan.com", lastname: 'tom', passowrd: 123456};

//将对象转换成字符串 - 没有指定分隔符和分配符,并且自动编码汉字
var param= querystring.stringify(obj);
console.log(param);
// firstname=dk&url=http%3A%2F%2Fdk-lan.com&lastname=tom&passowrd=123456

//将字符串转换成对象
var newobj=querystring.parse(param);
console.log(newobj);
/*
{ firstname: 'dk',
  url: 'http://dk-lan.com',
  lastname: 'tom',
  passowrd: '123456' }
*/
```

#### 2.5 [events 模块](https://github.com/mcya/node-as-myself/tree/master/02_thirdApi/02_05_events)

```javascript
// -用法
// - 实例化一个事件实例 new events.EventEmitter();
// - 在实例对象上定义事件 on(eventname, function(){})
// - 通地 emit 方法触发事件 emit(eventname)

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('connection', function(){
    console.log('log: 连接成功。');
	// 触发 data_received 事件
	eventEmitter.emit('data_received');
});

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
	console.log('log: 数据接收成功。');
});

//用 eventEmitter 对象的 emit 方法来调用事件
eventEmitter.emit('connection');
console.log("log: 程序执行完毕。");

/*
 执行结果：
    log: 数据接收成功。
    log: 程序执行完毕。
    log: 连接成功。
*/
```
