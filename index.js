var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// necessário para chamadas cross-origin
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    next();
});

var port = process.env.PORT || 8080;

// GET https://www.<nome_da_aplicacao>.herokuapp.com/teste
app.get('/teste', function(req,res) {
    // console.log('passou aqui!')
    res.send({
        "teste" : "teste"
    });
});

app.listen(port);
console.log('Servidor está de pé na porta: ' + port);
