var ObjectID = require('mongodb').ObjectID;

/* Simulazione Array todos in memoria
var todos = [];

for(var i=1; i<11; i++) {
    todos.push(new Todo('Attività ' + i));
}
*/

module.exports = function(db) {
    var self = this;

    this.db = db;

    // CRUD
    // C - Create
    // R - Read (All per tutti - One per uno)
    // U - Update (singolo record)
    // D - Delete (singolo record)


    // readAll
    this.readAll = function(coll, cb) {
        var entity = self.db.collection(coll);

        entity.find().toArray(cb);
    }

    // Read singolo record
    this.read = function(id) {
        var items = todos.filter((d) => d.id == id);
        return items.length > 0 ? items[0] : {};
    }

    // Create
    this.create = function(coll, item, cb) {
        var entity = self.db.collection(coll);
        
        entity.insert(item, cb);
    }

    // Update
    this.update = function(coll, id, item, cb) {
        var entity = self.db.collection(coll);

        var filter = { _id: new ObjectID(id) };

        var obj = {};
        obj.nome = item.nome || 'non definito';

        // comando di Update su collection con operatore $set
        entity.update(filter, { '$set': obj }, cb);         
    }

    // Delete
    this.delete = function(coll, id, cb) {
        var entity = self.db.collection(coll);
        var filter = { _id: new ObjectID(id) };

        entity.remove(filter, cb);
    }
}