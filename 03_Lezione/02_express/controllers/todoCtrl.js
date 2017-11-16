var Todo = require('../models/todo');

var todos = [];

for(var i=1; i<11; i++) {
    todos.push(new Todo('Attività ' + i));
}

module.exports = function() {
    var self = this;

    // CRUD
    // C - Create
    // R - Read (All per tutti - One per uno)
    // U - Update (singolo record)
    // D - Delete (singolo record)


    // readAll
    this.readAll = function() {
        return todos;
    }

    // Read singolo record
    this.read = function(id) {
        var items = todos.filter((d) => d.id == id);
        return items.length > 0 ? items[0] : {};
    }

    // Create
    this.create = function(item) {
        var obj = new Todo(item.nome);

        todos.push(obj);
        return obj;
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
    this.delete = function(id) {
        // Soluzione 1
        var obj = self.read(id);
        var index = todos.indexOf(obj);

        // Alterntiva 2
        /*
        var index = -1;
        todos.forEach(function(value, i){
            if(value.id == id)
                index = i;
        });
        */
        
        if(index>-1) {
            todos.slice(index, 1);
            return true;
        } else {
            return false;
        }
    }
}