var ObjectID = require('mongodb').ObjectID;

var Todo = require('../models/todo');

/* Simulazione Array todos in memoria
var todos = [];

for(var i=1; i<11; i++) {
    todos.push(new Todo('Attività ' + i));
}
*/

module.exports = function(db) {
    var self = this;

    this.todos = db.collection('todos');

    // CRUD
    // C - Create
    // R - Read (All per tutti - One per uno)
    // U - Update (singolo record)
    // D - Delete (singolo record)


    // readAll
    this.readAll = function(cerca, cb) {
        var filter = {};
        if(cerca.length>0)
            filter = { nome: { $regex: cerca, $options: 'i' } }

        self.todos.find(filter).toArray(cb);
    }

    // Read singolo record
    this.read = function(id, cb) {
        var filter = { _id: new ObjectID(id) };

        self.todos.find(filter).toArray(cb);
    }

    // Create
    this.create = function(item, cb) {
        var obj = new Todo(item.nome);

        self.todos.insert(obj, cb);
    }

    // Update
    this.update = function(id, item, cb) {
        var filter = { _id: new ObjectID(id) };

        var obj = {};
        obj.nome = item.nome || 'non definito';
        obj.evasa = item.evasa || false;

        // comando di Update su collection con operatore $set
        self.todos.update(filter, { '$set': obj }, cb);
    }

    // Delete
    this.delete = function(id, cb) {
        console.dir({_id: id});
        var filter = { _id: new ObjectID(id) };

        self.todos.remove(filter, cb);
    }
}