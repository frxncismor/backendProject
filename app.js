// Carga la librería dotenv
require('dotenv').config();

// Constantes
const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config');

// Inicializar variables
const app = express();

// Configurar CORS
app.use(cors())

// Base de datos
dbConnection();

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Express server puerto ' + process.env.PORT + ' \x1b[32m%s\x1b[0m', ' online');
});