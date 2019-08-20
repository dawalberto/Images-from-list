const app = require('express')();
const Scraper = require('images-scraper');
const google = new Scraper.Google();


app.get('/', (req, res) => {

    res.json({
        ok: true,
        response: 'Bienvenido'
    })

})

app.get('/images/:searchStringImg', (req, res) => {

    let stringImage = req.params.searchStringImg;
    console.log(stringImage)

    google.list({
        keyword: stringImage,
        num: 3,
        detailt: true,
        nightmare: {
            show: false
        }
    })
    .then(response => {
        res.json({
            ok: true,
            response
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