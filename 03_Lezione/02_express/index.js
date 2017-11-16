// Webserver con modulo Express.js

// utilizzo package
var express = require('express'),
    app =  express();

var routes = require('./routes');

app.use(function(req, res, next){
    console.log('------------------------');
    console.log('URL: ' + req.url);
    console.log('File: ' + __dirname + '/static' + req.url);
    console.log('------------------------');
    next();
});

// Risorse statiche
app.use(express.static(__dirname + '/static'));



// Middleware di autentizazione


// Definizione routes
routes(app);

// Not found 404
app.use(function(req, res, next){
    console.log('File non trovato');
    res.status(404).send('File non trovato');
});

// Avvio Server su porta 8080
app.listen(8080);

console.log('Webserver started on port 8080');