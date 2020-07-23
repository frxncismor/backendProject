// Carga la libreria de express
var express = require('express');
const { dbConnection } = require('./database/config');
// Inicializar variables
var app = express();
dbConnection();


// Primer ruta
app.get('/', (req, resp, next) => {
    resp.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada'
    })
});


// Escuchar peticiones
app.listen(3200, () => {
    // console.log('Express server puerto 3000 online');
    console.log('Express server puerto 3200: \x1b[32m%s\x1b[0m', ' online');
});
