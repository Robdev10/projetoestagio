const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.get('/', (req, res)=>{

    res.send('ja sei criar e subir o servidor sozinho graças a deus!!!');

})




app.listen(3000, ()=>{

    console.log('Servidor Conectado!');
})