const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.get('/', (req, res)=>{

    res.send('');

})




app.listen(3000, ()=>{

    console.log('Servidor Conectado!');
})