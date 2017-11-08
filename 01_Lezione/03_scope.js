// 03 -  Scope (ambito di definizione delle variabili)

var index = 0,
    nome = 'Mario';

console.log('index: ' + index + ' - nome: ' + nome);

// Dichiarazione Funzione
function saluto() {
    var index = 0;
    index++;
    console.log('index: ' + index + ' - nome: ' + nome);
}

// Esecuzione Funzione
saluto();
console.log('index: ' + index + ' - nome: ' + nome);

// Dichiarazione Funzione con parametro utente
function salutoUtente(nome) {
    var index = 0;
    index++;
    console.log('index: ' + index + ' - nome: ' + nome);
}

// Esecuzione funzione
salutoUtente('Filippo');
console.log('index: ' + index + ' - nome: ' + nome);

// Blocco di istruzione
{
    let nome = 'Giuseppe';
    console.log('index: ' + index + ' - nome: ' + nome);
} 
console.log('index: ' + index + ' - nome: ' + nome);
