// Routes root

// Controllers
const TodoCtrl = require('../controllers/todoCtrl');

module.exports = function(app, db) {
    var todoCtrl = new TodoCtrl(db);

    console.log('routes');

    // Home del sito
    app.get('/', function(req, res, next){
        console.log('Benvenuto');
        res.send('Benvenuto nel nostro express server');
    });

    // get All todos
    app.get('/todos', function(req, res){
        var cerca = req.query.cerca || '';

        todoCtrl.readAll(cerca, function(err, data){
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

        todoCtrl.read(id, function(err, data){
            if(err)
                return res.status(500).send(err);

            res.send(data.length > 0 ? data[0] : {} );
        });
    });


   
    // es. URL localhost/todos
    // con oggetto passat nel body della richiesta
    app.post('/todos', function(req, res){
        var item = req.body;
        todoCtrl.create(item, function(err, data){
            if(err) 
                return res.status(400).send(err);            

            console.dir(data);
            res.status(201).send(data);
        });
    });

    // put - aggiornamento dati
    app.put('/todos/:id', function(req, res){
        var id = req.params.id;
        var obj = req.body;

        todoCtrl.update(id, obj, function(err, data){
            if(err) 
                return res.status(500).send(err);

            res.status(203).send(data);
        });
    });

    
    // delete
    app.delete('/todos/:id', function(req, res){
        var id = req.params.id;
        todoCtrl.delete(id, function(err, data){
            if(err) {
                console.log(err);
                return res.status(400).send(err);
            }
            console.dir(data);
            res.status(203).send(data);            
        });
        
    });

}