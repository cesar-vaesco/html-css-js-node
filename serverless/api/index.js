
const express = require('express');
const moongose = require('mongoose');
//Body-parser en verciones actuales ya viene configurado con express
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Configurar la conexión con el gestor de la base de datos de mongo
moongose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
/* mongodb+srv://cesar:<cesar>@cluster0.t5nvx.mongodb.net/almuerzi_db?retryWrites=true&w=majority */

app.get('*', (rep, res) =>{
    res.send('Chanchito feliz');
})

module.exports = app;
