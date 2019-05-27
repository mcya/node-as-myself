# node #

## 目录说明

```bash
├─01_base                         #nodeJS一些日常化的知识点
│
├─02_thirdApi                     #Node.js API及常用第三方模块
│ ├──02_01_http                      #http模块
│ ├──02_02_net                       #net模块
│ ├──02_03_url                       #url模块
│ ├──02_04_querystring               #querystring 查询(参数)模块
│ ├──02_05_events                    #events模块
│ ├──02_06_fs                        #fs 文件模块
│ ├──02_07_stream                    #stream模块 (文件流接口)
│ ├──02_08_cheerio                   #cheerio模块 (原生模块爬虫)
│ ├──02_09_request                   #request模块 (request+cheerio 爬虫)
│ ├──02_10_AnyProxy                  #node抓包工具AnyProxy
│ ├──02_10_Anync                     #Async异步控制流
│ ├──02_11_Mocha                     #Mocha单元测试
├─03_baseApply                    #Node.js 基础应用
│ ├──03_01_router                    #router路由
│ ├──03_02_request                   #request (02-09)
│ ├──03_03_http小爬虫                 #http小爬虫 (request+cheerio)

```

## 内容简介

### 1. [node 基础篇](https://github.com/mcya/node-as-myself/tree/master/01_base)

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
#### 2.1 [http 模块](https://github.com/mcya/node-as-myself/tree/master/02_01_http)
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

#### 2.2 [net 模块](https://github.com/mcya/node-as-myself/tree/master/02_02_net)

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



#### 2.3 [url 模块](https://github.com/mcya/node-as-myself/tree/master/02_03_url)
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

#### 2.4 [querystring 模块](https://github.com/mcya/node-as-myself/tree/master/02_04_querystring)
查询(参数)模块。
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

#### 2.5 [events 模块](https://github.com/mcya/node-as-myself/tree/master/02_05_events)

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

#### 2.6 [fs 模块](https://github.com/mcya/node-as-myself/tree/master/02_06_fs)

文件模块。
出于安全因互，javascript 是不能操作本地文件，所以文件的处理都会放到服务端去处理。Node.js 作为一门后端动态语言，同样具备了操作文件的功能，这一操作需要用到 Node.js 的原生模块：fs。 - 类似 文本读取写入和图片读取

```js
var fs = require('fs');

// 文本读取
fs.readFile('demoFile.txt', function (err, data) {
   if (err) { return console.error(err); }
   console.log("异步读取: " + data.toString());
});

// appendFile 追加文本
fs.appendFile('input.txt', '+这个是追加的内容+', function (err) {});

// writeFiel 是覆盖写入文本
fs.writeFile('input.txt', '抵制一切不利于中国和世界和平的动机',  function(err) {});

// 浏览器图片读取
var http = require('http');
var content =  fs.readFileSync('001.jpg', "binary");
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'image/jpeg'});
	response.write(content, "binary");
	response.end();
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/'); //访问地址端口
```

#### 2.7 [stream 模块](https://github.com/mcya/node-as-myself/tree/master/02_07_stream)
文件流。
Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。往往用于打开大型的文本文件，创建一个读取操作的数据流。所谓大型文本文件，指的是文本文件的体积很大，读取操作的缓存装不下，只能分成几次发送，每次发送会触发一个data事件，发送结束会触发end事件。
```js
// 结合fs读取模块，对文件进行流式处理

var fs = require("fs");
var readerData = '', writeData = '坚决抵制一切不利于中国和世界和平的动机';


// 创建可读流
var readerStream = fs.createReadStream('input.txt');//读取 input.txt 文件
readerStream.setEncoding('UTF8');// 设置编码为 utf8。
readerStream.on('data', function(chunk) { readerData += chunk }); //文件流的处理过程
readerStream.on('end',function(){ console.log(readerData); }); //成功读取文件流 输出data内容
readerStream.on('error', function(err){ console.log(err.stack); });//出错的情况
console.log("程序执行完毕");


// 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('output.txt', {'flags': 'a'}); //追加文本
var writerStream = fs.createWriteStream('output.txt'); //内容直接覆盖原文本
writerStream.write(writeData,'UTF8');// 使用 utf8 编码写入数据
writerStream.end();// 标记文件末尾
writerStream.on('finish', function() { console.log("写入完成。"); });// 处理流事件 --> data, end, and error
writerStream.on('error', function(err){ console.log(err.stack); });
console.log("程序执行完毕");


// 管道读写操作 - 即读取一个文件且将该文件写入另一个文件中
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中 - 直接覆盖原先的内容
readerStream.pipe(writerStream);


// 压缩解压
var zlib = require('zlib');//压缩和解压的模块

// 压缩
fs.createReadStream('input.txt')// 以流的方式读取文本
  .pipe(zlib.createGzip()) //把读取出来的文本调用压缩模块进行压缩
  .pipe(fs.createWriteStream('input.txt.zip'));//把压缩好的流进行保存

// 解压
fs.createReadStream('input.txt.zip'); //文件名应该是对应的
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'));
console.log("程序执行完毕");
```

#### 2.8 [cheerio 模块](https://github.com/mcya/node-as-myself/tree/master/02_08_cheerio)
综合实现爬种。


#### 2.9 [request 模块](https://github.com/mcya/node-as-myself/tree/master/02_09_request)

一个第三方的模块，可用于发起 http 或 https 请求，可理解成服务端的 ajax 请求。可用于代简单的服务器代理，用法和 ajax 类似。
`request` 拉取, `get/post`获取编写整个页面的代码, 也可以结合`fs`模块转成文件流。

```js
var request = require('request');

// get - 直接拉取HTML的代码
request.get('https://cnodejs.org/topic/5cbfd9aca86ae80ce64b3175', (error, response, body) => { })
// post
request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){})

// 文件流的形式 - img
request('http://img.zcool.cn/community/018d4e554967920000019ae9df1533.jpg@900w_1l_2o_100sh.jpg').pipe(fs.createWriteStream('test.png'))
```

#### 2.10 [anyproxy抓包工具](https://github.com/mcya/node-as-myself/tree/master/02_10_anyproxy)
详见文档

#### 2.10 [async异步控制流程](https://github.com/mcya/node-as-myself/tree/master/02_10_async)
Node.js 是一个异步机制的服务端语言，在大量异步的场景下需要按顺序执行，那正常做法就是回调嵌套回调，回调嵌套太多的问题被称之回调地狱。

Node.js 为解决这一问题推出了异步控制流 ———— Async

详见文档

#### 2.11 [mocha单元测试](https://github.com/mcya/node-as-myself/tree/master/02_09_mocha)
为保证代码的质量，单元测试必不可少

注： 如需操作需要新建出一个mocha文件夹。

详见文档

### 3.node基础应用
#### 3.1 [node 路由](https://github.com/mcya/node-as-myself/tree/master/03_01_router)
在 BS 架构中，路由的概念都是一样的，可理解为根据客户端请求的 URL 映射到不同的方法实现，更多的一般都是针对 URL 中的路径，或者是参数，又或者是锚点这些信息进行映射。

详见文档

#### 3.2 [request](https://github.com/mcya/node-as-myself/tree/master/02_09_request)
