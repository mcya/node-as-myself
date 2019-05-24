
// 捕捉错误

let sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error') ;
        }, time);
    })
}

let start = async () => {
    try{
        let result = await sleep(3000);
        console.log('success', result)
    } catch(err) {
        console.log('error', err)
    }
}

start();
