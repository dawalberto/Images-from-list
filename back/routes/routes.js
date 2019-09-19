const app = require('express')()
const google = require('google-parser')


app.get('/', (req, res) => {

    res.json({
        ok: true,
        response: 'Bienvenido'
    })

})

app.get('/images/:searchStringImg', (req, res) => {

    let stringImage = req.params.searchStringImg;
    console.log(stringImage)

    google.img(stringImage)
    .then(response => {
        let arayImages = response.slice(0, 3)
        res.json({
            ok: true,
            response: arayImages
        })
    })
    .catch(err => {
        res.json({
            ok: false,
            err
        })
    })



})


module.exports = app;