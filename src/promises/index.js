const { resolve } = require("path")

const somethingWillHappen = () => {
    return new Promise((res, rej) => {
        if (true) {
            res('Hey! We did it')
        } else {
            rej('Oops!')
        }
    })
}

somethingWillHappen()
    .then(res => console.log(res))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((res, rej) => {
        if (true) {
            setTimeout(() => {
                res('True')
            }, 2000)
        } else {
            const err = new Error('False')
            rej(err)
        }
    })
}

somethingWillHappen2()
    .then(res => console.log(res))
    .catch(err => console.error(err))