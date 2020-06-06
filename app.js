async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function timeOutInSequence() {
    await delay(3000)
    console.log('After 3 seconds')
    await delay(2000)
    console.log('After 5 seconds')
    await delay(1000)
    console.log('After 6 seconds')
}

timeOutInSequence()
