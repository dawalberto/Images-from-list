const app = require('express')();
const cors = require('cors');


app.use( cors() );
app.use( require('./routes/routes') );


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando por el puerto ${ port }`)
})