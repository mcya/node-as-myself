var fs = require("fs");
var readerData = '';

// 读取文件流

// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// console.log(readerStream);

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   readerData += chunk;
   console.log("chunk, readerData:", chunk, readerData);
});

readerStream.on('end',function(){
   console.log("readerData:", readerData);
});

readerStream.on('error', function(err){
   console.log("err.stack", err.stack);
});

console.log("程序执行完毕");
