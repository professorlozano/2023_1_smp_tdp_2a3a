//fazer a importação do express
const express = require('express');

//Rotas (quando o servidor for acessado,  pra onde ele vai?)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá Mundo!!!');
});

//configurações basicas do aplicativo
const app = express();
app.use('/',router); //passamos apenas uma rota, pois foi criada 1

module.exports = app; //exportamos o app pois iremos usa-lo no servidor


