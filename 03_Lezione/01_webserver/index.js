// Creazione WebServer con librerie base nodejs

// Utilizzo package
const http = require('http'),
      fs = require('fs');

// Pagine Statiche
const pagina_index = fs.readFileSync(__dirname + '/static/index.html');
const pagina_404 = 'File non trovato!';

//Creazione Server
var server = 
http.createServer(function(req, res){
    console.log('Richiesta: ' + req.url);

    if(req.url=='/index.html') {
        res.write(pagina_index);
    } else {
        res.write(pagina_404);
    }
    res.end();
})

server.listen(8080);

console.log("Server start on port 8080");

