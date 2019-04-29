var url = require('url');

//第二个参数为 true => {a: 'index', t: 'article', m: 'default'} - urlObj.query 为一个对象
var urlObj = url.parse('http://www.dk-lan.com/one?a=index&t=article&m=default#dk', true);
console.log("urlObj true", urlObj);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.dk-lan.com',
  port: null,
  hostname: 'www.dk-lan.com',
  hash: '#dk',
  search: '?a=index&t=article&m=default',
  query: { a: 'index', t: 'article', m: 'default' },
  pathname: '/one',
  path: '/one?a=index&t=article&m=default',
  href: 'http://www.dk-lan.com/one?a=index&t=article&m=default#dk' }
*/

//第二个参数为 false - urlObj.query 为一个字符串 => ?a=index&t=article&m=default
urlObj = url.parse('http://www.dk-lan.com/one?a=index&t=article&m=default#dk', false);
console.log("urlObj false", urlObj);
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.dk-lan.com',
  port: null,
  hostname: 'www.dk-lan.com',
  hash: '#dk',
  search: '?a=index&t=article&m=default',
  query: 'a=index&t=article&m=default',
  pathname: '/one',
  path: '/one?a=index&t=article&m=default',
  href: 'http://www.dk-lan.com/one?a=index&t=article&m=default#dk' }
*/


var _parse = url.parse('http://www.dk-lan.com:8080/p/a/t/h?query=string#hash', false, false);
var _parse2 = url.parse('http://www.dk-lan.com:8080/p/a/t/h?query=string#hash', true, true);
console.log("_parse false,false/tt", _parse, _parse2);
/*
Url {
 protocol: 'http:',
 slashes: true,
 auth: null,
 host: 'www.dk-lan.com:8080',
 port: '8080',
 hostname: 'www.dk-lan.com',
 hash: '#hash',
 search: '?query=string',
 query: 'query=string',
 pathname: '/p/a/t/h',
 path: '/p/a/t/h?query=string',
 href: 'http://www.dk-lan.com:8080/p/a/t/h?query=string#hash' }

 Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.dk-lan.com:8080',
  port: '8080',
  hostname: 'www.dk-lan.com',
  hash: '#hash',
  search: '?query=string',
  query: { query: 'string' },
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://www.dk-lan.com:8080/p/a/t/h?query=string#hash' }
*/

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
console.log("result", result);
// 输出结果： http://dk-lan.com:80?query=string#hash
