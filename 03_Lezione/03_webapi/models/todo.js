// Modello attività todo

var iCounter = 0;

var Todo = function(nome) {
    this.id = ++iCounter;
    this.nome = nome || 'nuova attività';
    this.evasa = false;
    this.dtInsert = Date.now();
}

module.exports = Todo;