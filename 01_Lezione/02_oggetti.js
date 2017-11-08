// 02 - Gestione Oggetti

// Definizione oggetto alunno
var alunno = {
    nome: 'andrea',
    cognome: 'maddalena'
};


// Stampa dell'oggetto
console.dir(alunno);

// Stampa mediante ciclo (con bracket notation)
for (var key in alunno) {
    console.log(key + ': ' + alunno[key]);
}

// Stampa mediante dot notation
console.log('nome: ' + alunno.nome);
console.log('cognome: ' + alunno.cognome);

// Modifica dell'oggetto alunno con aggiunta di 
// proprietà comune 
alunno.comune = 'Siracusa';
// alunno['comune'] = 'Siracusa';  operazione equivalente
console.dir(alunno);


// Modifica alunno con function nominativo
// che restituisce il nome e cognome concatenati
alunno.nominativo = alunno.nome + ' ' + alunno.cognome;
console.log('nominativo: ' + alunno.nominativo);

// cambio di nome
alunno.nome = 'Mario';
console.log('nominativo: ' + alunno.nominativo);

// con funzione
alunno.nominativo = function(){
    return this.nome + ' ' + this.cognome;
}
console.log('nominativo: ' + alunno.nominativo());

