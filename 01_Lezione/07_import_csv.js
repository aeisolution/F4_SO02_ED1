//06 import da CSV

// Dichiarazione librerie da utilizzare
const fs = require('fs');
const parse = require('csv-parse');

// Nome Campi da importare da file CSV
let import_fields = ['Denominazione regione',
                     'Denominazione provincia',
                     'Sigla automobilistica',
                     'Ripartizione geografica'];

let import_indexes = []; 

// Record con soli campi da importare                     
let record = [];

// Lista campi importati
let list = [];

// parser ===============================================================
let parser = parse({delimiter: ";"});

var index = 0;
// Use the writable stream api
parser.on('readable', function(){
    var item = parser.read();
    if(!item) return;

    // Prima riga di elaborazione (intestazione campi)
    if(index++==0) {
        // Calcolare posizione campi da importare
        import_fields.forEach(function(elem){
            import_indexes.push(item.indexOf(elem));
        });
        console.log('import_indexes');
        console.dir(import_indexes);
    } 
    // righe successive (dati)
    else {
        // Push valori in base a posizione campi da importare
        var temp = {};
        import_indexes.forEach(function(value, i){
            if(value!==-1) {
                //temp.push(item[value]);
                temp[import_fields[i]] = item[value];
            }
        });        

        list.push(temp);
    }

});

// Catch any error
parser.on('error', function(err){
    console.log(err.message);
});

// When we are done, test that the parsed output matched what expected
parser.on('finish', function(){
    list.forEach(function(item) {
        if(item) {
            //console.log('record: %s %s %s ', item[0], item[1], item[2]);
            console.log(item);
        }
    });
});


fs.createReadStream(__dirname + '/data/istat_province.csv').pipe(parser);