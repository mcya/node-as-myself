let sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("sleep Promise");
            resolve('ok') ;
        }, time);
    })
}

let start = async () => {
    for (var i = 1; i <= 3; i++) {
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
}

start();
