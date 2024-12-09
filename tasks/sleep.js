function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    });
}

(async () => {
    console.log('### start')
    await sleep(2000)
    console.log('### finish')
})()

