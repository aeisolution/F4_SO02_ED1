// Routes root

// Controllers
const TodoCtrl = require('../controllers/todoCtrl');

module.exports = function(app) {
    var todoCtrl = new TodoCtrl();

    // Home del sito
    app.get('/', function(req, res, next){
        console.log('Benvenuto');
        res.send('Benvenuto nel nostro express server');
    });

    // get All todos
    app.get('/todos', function(req, res){
        console.log('/todos');
        todoCtrl.readAll(function(err, data){
            if(err) {
                res.status(500).send(err);
            } else {
                console.dir(data);
                res.send(data);
            }
        });
    });

    // get One record
    app.get('/todos/:id', function(req, res){
        var id = req.params.id;
        res.send(todoCtrl.read(id));
    });

    // Creazione di nuova attività (opzione 1 con metodo get)
    // es. URL localhost/todos/new/nome_attività
    app.get('/todos/new/:nome', function(req, res){
        var nome_attivita = req.params.nome;
        var obj = todoCtrl.create({ nome: nome_attivita });
        res.status(201).send(obj);
    });


    // es. URL localhost/todos
    // con oggetto passat nel body della richiesta
    app.post('/todos', function(req, res){
        var item = req.body;
        var obj = todoCtrl.create(item);
        res.status(201).send(obj);
    });

    // put - aggiornamento dati
    app.put('/todos/:id', function(req, res){
        var id = req.params.id;
        var obj = req.body;
        var item = todoCtrl.update(id, obj);
        res.status(203).send(item);
    });

    
    // delete
    app.delete('/todos/:id', function(req, res){
        var id = req.params.id;
        var result = todoCtrl.delete(id);
        if(result) {
            res.status(203).send();
        } else {
            res.status(400).send('Record non trovato');
        }
    });

}