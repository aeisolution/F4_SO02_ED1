// Modello attività todo

var iCounter = 0;

var Todo = function(nome, categoria) {
//    this.id = ++iCounter;
    this.nome = nome || 'nuova attività';
    this.categoria = categoria || '';
    this.evasa = false;
    this.dtInsert = Date.now();
}

module.exports = Todo;