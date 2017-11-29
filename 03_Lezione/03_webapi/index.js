// Webserver con modulo Express.js

// utilizzo package
var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    app =  express();

var MongoClient = require('mongodb').MongoClient;

var routes  = require('./routes'),
    api     = require('./routes/api');

/*
app.use(function(req, res, next){
    console.log('------------------------');
    console.log('URL: ' + req.url);
    console.log('File: ' + __dirname + '/static' + req.url);
    console.log('------------------------');
    next();
});
*/

// Configurazione Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Risorse statiche
app.use(express.static(__dirname + '/static'));



// Middleware di autentizazione

MongoClient.connect('mongodb://localhost:27017/todos1-db', function(err, db){
    if(err) throw err;


    // Definizione routes
    routes(app, db);
    api(app, db);

    // Not found 404
    app.use(function(req, res, next){
        console.log('File non trovato');
        res.status(404).send('File non trovato');
    });

    // Avvio Server su porta 8080
    app.listen(8080);

    console.log('Webserver started on port 8080');    
});


