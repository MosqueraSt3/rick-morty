const doSomethingAsync = () => {
    return new Promise((res, rej) => {
        (true)
            ? setTimeout(() => res('Do Something Async'), 3000)
            : rej(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(`${something} 2`)
    } catch (err) {
        console.error(`|ERROR| ${err}`)
    }
}

console.log('Before 1')
anotherFunction()
console.log('After 1')