# 中间件

安装并运行，用于监听POST和GET请求的参数，时间和路由等，所有请求将会经过`express`搭建的服务器，然后利用`fs`模块写入日志，最后中转到`index.php`服务器上

打开浏览器输入网址[http://localhost:8081/log](http://localhost:8081/log)进入日志页
```javascript
npm install
node app
http://localhost:8081/log
```
```javascript
http://localhost:8081/log/abc?name=Oaoafly
```