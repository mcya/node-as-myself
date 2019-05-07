const request = require('request');

request({
	method: 'GET',
	url: 'http://api.avatardata.cn/Weather/Query',
	headers: {
		'Host': 'api.veilpark.com',
		'mid': '8678385b7d1eb259377973ee02cd9d52618fc0f7',
		'Accept': '*/*',
		'Authorization': 'token 40101431f0c64e83839a56c2069b1a63jcrk8on1',
		'Proxy-Connection': 'keep-alive',
		'Accept-Language': 'zh-Hans;q=1',
		'cversion': '4400',
		'Content-Type': 'application/json',
		'User-Agent': 'maskpark/4.4 (iPhone; iOS 9.3.1; Scale/2.00)',
		'Connection': 'keep-alive',
		'client': 'ios'
	},
  form:{
    key: "6973eb6e4c4d466e8db9cc90ab47daae",
  }
}, (error, response, body) => {

  console.log(error);
  console.log("------------------------------------------------------------------------------------------");
  console.log(response.statusCode);
  console.log("------------------------------------------------------------------------------------------");
  console.log(body);

	if(!error && response.statusCode == 200) {
		var info = JSON.parse(body);
		console.log(info);
	} else {
		console.log("请求出错");
	}
})
