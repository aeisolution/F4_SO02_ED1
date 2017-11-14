//06 import da CSV

console.log(__dirname);

// Dichiarazione librerie da utilizzare
var fs = require('fs');
var parse = require('csv-parse');


let record = [];
let list = [];

// parser ===============================================================
let parser = parse({delimiter: ";"});

// Use the writable stream api
parser.on('readable', function(){
    var item = parser.read();
    list.push(item);
});

// Catch any error
parser.on('error', function(err){
    console.log(err.message);
});

// When we are done, test that the parsed output matched what expected
parser.on('finish', function(){
    list.forEach(function(item) {
        if(item) {
            console.log('record: %s %s %s ', item[0], item[1], item[2]);
        }
    });
});


fs.createReadStream(__dirname + '/data/province.csv').pipe(parser);