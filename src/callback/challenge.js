const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const URL_API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api, cb) => {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = ev => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                cb(null, JSON.parse(xhttp.responseText))
            } else {
                const err = new Error(`Error ${url_api}`)
                return cb(err, null)
            }
        }
    }
    xhttp.send()
}

fetchData(URL_API, function (err1, data1) {
    if (err1) return console.error(err1)
    fetchData(URL_API + data1.results[0].id, function (err2, data2) {
        if (err2) return console.error(err2)
        fetchData(data2.origin.url, function (err3, data3) {
            if (err3) return console.error(err3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})