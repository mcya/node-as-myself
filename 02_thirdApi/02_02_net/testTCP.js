
//

/*

// 创建一个 TCP 服务器:
var net = require("net");
var server = net.createServer( function (socket) {
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

*/
// 通过net模块自行构造客户端进行会话，测试上面构建的TCP服务的代码如下

/*
 * 执行方式：
 $ node testTCP.js

  client connected
*/

var net = require('net');
var client = net.connect({port:8092}, function () {
  //'connect' listener
  console.log('client connected');
  client.write('world !\r\n');
});

client.on('data', function (data) {
  console.log(data.String());
  client.end();
});

client.on('end', function () {
  console.log('client disconnected');
});
