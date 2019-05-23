var querystring = require('querystring');


//http://xxx.com?name=&passwod
//
var obj={firstname:"dk",url:"http://dk-lan.com", lastname: 'tom', passowrd: 123456};

//将对象转换成字符串
var param= querystring.stringify(obj);
//没有指定分隔符和分配符,并且自动编码汉字
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
