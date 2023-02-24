require('dotenv').config({ path: '.env' });
const express = require('express');

const routes = require('./routes');

const db = require('./models/db');

const app = express();
app.use(express.json())

app.use(routes);

app.use(express.urlencoded({ extended: true }))

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta,${process.env.PORT}`);
});