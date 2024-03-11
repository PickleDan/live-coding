setTimeout(() => {
    console.log("timeout")
}, 0)

console.log(1)

new Promise(res => {
    console.log('Promise')
    setTimeout(() => {
        console.log("777")
        res()
    }, 0)
}).then(() => {
    console.log("then1")
}).then(() => {
    console.log("then2")
})

console.log(4)

setTimeout(() => {
    console.log("timeout2")
}, 0)

// 1,
// Promise
// 4
// timeout
// 777
// then1
// then2
// timeout2
