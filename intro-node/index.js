
const { response } = require('express');
const express = require('express');
const app = express();

app.get('*', (require, response) => {
    response.send({ message: 'Hola César Vargas' });
});

app.listen(3000, () => console.log('Nuestro servidor esta escuchando en el puerto 3000'));
