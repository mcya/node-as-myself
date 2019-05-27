var request = require('request');

// this is vim save



// 这里直接拉取 cnodejs 提供的api - get /topic/:id 主题详情

// get 拉取
// request.get('https://cnodejs.org/topic/5cbfd9aca86ae80ce64b3175', (error, response, body) => {
//     console.log(body)
// })


request('https://cnodejs.org/topic/5cbfd9aca86ae80ce64b3175', (error, response, body) => {
    console.log(body)
})
