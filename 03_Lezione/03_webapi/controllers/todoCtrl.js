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
    this.readAll = function(cb) {
        self.todos.find().toArray(cb);
    }

    // Read singolo record
    this.read = function(id) {
        var items = todos.filter((d) => d.id == id);
        return items.length > 0 ? items[0] : {};
    }

    // Create
    this.create = function(item, cb) {
        var obj = new Todo(item.nome);

        self.todos.insert(obj, cb);
    }

    // Update
    this.update = function(id, item) {
        var obj = self.read(id);

        // TODO: Verifica oggetto vuoto
        obj.nome = item.nome;
        obj.evasa = item.evasa;   
        return obj;     
    }

    // Delete
    this.delete = function(id, cb) {
        console.dir({_id: id});
        var filter = { _id: new ObjectID(id) };

        self.todos.remove(filter, cb);
    }
}