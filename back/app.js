const app = require('express')();
const cors = require('cors');


app.use( cors() );
app.use( require('./routes/routes') );


app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000')
})