// 参数配置
const request = require('request');

function requestGet(url, options) {
    options = options || {};
    var httpOptions = {
        url: url,
        method: 'get',
        timeout: options.timeout || 10000,
        headers: options.headers || default_post_headers,
        proxy: options.proxy || '',
        agentOptions: agentOptions,
        params: options.params || {}
    }
    if(options.userAgent){
        httpOptions.headers = {
            'User-Agent': userAgents[options.userAgent],
        }
    }

    try{
        request.get(httpOptions, function(err, res, body) {
            if (err) {
                options.callback({status: false, error: err})
            } else {
                options.callback({status: res.statusCode == 200, error: res, data: body})
            }
        }).on('error', logger.error);
    } catch(err){
        console.log('http error');
    }
}
requestGet("https://cnodejs.org/topic/5cbfd9aca86ae80ce64b3175")
