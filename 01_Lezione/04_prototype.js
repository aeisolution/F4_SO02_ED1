// 04 Prototype

var Alunno = function(nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;

  // Proprietà con valore deafult string emty;
  this.comune = '';

  //a. Creazione proprietà nominativo (concatena nome e cognome)
  /*
  this.nominativo = function() { 
    return this.nome + ' ' + this.cognome; 
  }
  */
}

//b. Utilizzo prototype per definizione metodo
Alunno.prototype.nominativo = function() { 
    return this.nome + ' ' + this.cognome; 
  }


// creazione oggetto alunno1 di tipo Alunno
var alunno1 = new Alunno('Mario', 'Rossi');
var alunno2 = new Alunno('Giovanni', 'Bianchi');

// modifica del cognome
alunno1.cognome = 'Verdi';

// Stampa oggetto alunno1
console.dir(alunno1);
console.dir(alunno2);

// Stampa dei metodi in prototype
console.dir(Alunno.prototype);

// Stampa nominativo di alunno1
console.log("nominativo alunno1: " + alunno1.nominativo());