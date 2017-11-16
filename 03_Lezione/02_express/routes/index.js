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
        res.send(todoCtrl.readAll());
    });

    // get One record
    app.get('/todos/:id', function(req, res){
        var id = req.params.id;
        res.send(todoCtrl.read(id));
    });
}