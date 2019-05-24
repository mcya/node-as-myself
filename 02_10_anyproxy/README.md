# node抓包工具AnyProxy

### 安装 AnyProxy
全局安装AnyProxy模块
```
npm i -g anyproxy
```

### 配置
1. 生成证书 - 执行命令后会弹出node证书
```
anyproxy-ca
```

2. 以代理https的方式启动
```
anyproxy -i
```

3. 在浏览器打开链接
```
http://localhost:8002/
```


### 安装证书

#### 配置代理
[Charles 工具](https://www.charlesproxy.com/)

#### 安装证书
本地双击直接安装 `rootCA.crt`, 即是执行 `anyproxy-ca` 命令生成的证书文件。
```
\.anyproxy\certificates\rootCA.crt
```
