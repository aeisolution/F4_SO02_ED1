/* 01 - Sintassi
   Sintassi base del linguaggio JS per dichiarazione variabili
   e funzioni
*/

var numero = 23;
var numero2 = '23';
var stringa = 'benvenuto';

var risultato = numero + 5;
var risultato2 = numero2 + 5;

// Stampa delle variabili
console.log('numero: ' + numero);
console.log('numero2: ' + numero2);

console.log('risultato: ' + risultato);
console.log('risultato2: ' + risultato2);

// Utilizzo Modulo
console.log(' 35 / 5= ' + 35 / 5);
console.log(' 35 % 5= ' + 35 % 5);

console.log(' 35 / 6= ' + 35 / 6);
console.log(' 35 % 6= ' + 35 % 6);

// ------------------------------------
// Definizio ed utilizzo array

var alunni = ['Antonino', 
              'Ninni', 'Sabina', 
              'Carmelo', 'Emiliano' ];

// Stampare il numero di elementi in array
console.log("L'array di alunni è composto da n. " + alunni.length + "elementi");

// Stampare contenuto dell'array (utilizzo console.dir)
console.dir(alunni);

// Stampare contenuto dell'array tramite ciclo for e forEach
console.log('Ciclo array con for');
for (var index = 0; index < alunni.length; index++) {
    var element = alunni[index];
    console.log(index + 1 + ' - ' + element);
}

var index = 0;
console.log('Ciclo array con forEach');
alunni.forEach(function(item){
    console.log(++index + ' - ' + item);
});





