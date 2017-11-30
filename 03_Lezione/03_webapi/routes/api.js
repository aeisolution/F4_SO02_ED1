// Routes root

// Controllers
const ApiCtrl = require('../controllers/apiCtrl');

module.exports = function(app, db) {
    var apiCtrl = new ApiCtrl(db);

    var url = '/api';

    // get All :collection
    app.get(url + '/:collection', function(req, res){
        var coll = req.params.collection;

        apiCtrl.readAll(coll, function(err, data){
            if(err) 
                return res.status(500).json(err);

            res.json(data);
        });
    });

    // get One record
    app.get(url + '/:collection/:id', function(req, res){
        var id = req.params.id;
        res.json(apiCtrl.read(id));
    });

    // es. URL localhost/:collection
    // con oggetto passat nel body della richiesta
    app.post(url + '/:collection', function(req, res){
        var coll = req.params.collection;

        var item = req.body;
        apiCtrl.create(coll, item, function(err, data){
            if(err) 
                return res.status(400).json(err);            

            res.status(201).json(data);
        });
    });

    // put - aggiornamento dati
    app.put(url + '/:collection/:id', function(req, res){
        var coll = req.params.collection;

        var id = req.params.id;
        var obj = req.body;
        apiCtrl.update(coll, id, obj, function(err, data){
            if(err)
                return res.status(500).json(err);

            res.status(203).json(data);
        });
    });
    

    
    // delete
    app.delete(url + '/:collection/:id', function(req, res){
        var coll = req.params.collection;

        var id = req.params.id;
        apiCtrl.delete(coll, id, function(err, data){
            if(err) {
                console.log(err);
                return res.status(400).json(err);
            }
            console.dir(data);
            res.status(203).json(data);            
        });
        
    });

}