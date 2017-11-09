// 05 Array

// Creazione array Province - archiviare array in file data/province.js
var province = [
{"sigla":"TO","provincia":"Torino","regione":"PIEMONTE"},
{"sigla":"VC","provincia":"Vercelli","regione":"PIEMONTE"},
{"sigla":"NO","provincia":"Novara","regione":"PIEMONTE"},
{"sigla":"CN","provincia":"Cuneo","regione":"PIEMONTE"},
{"sigla":"AT","provincia":"Asti","regione":"PIEMONTE"},
{"sigla":"AL","provincia":"Alessandria","regione":"PIEMONTE"},
{"sigla":"BI","provincia":"Biella","regione":"PIEMONTE"},
{"sigla":"VB","provincia":"Verbano-Cusio-Ossola","regione":"PIEMONTE"},
{"sigla":"AO","provincia":"Valle d'Aosta","regione":"VALLE D'AOSTA"},
{"sigla":"VA","provincia":"Varese","regione":"LOMBARDIA"},
{"sigla":"CO","provincia":"Como","regione":"LOMBARDIA"},
{"sigla":"SO","provincia":"Sondrio","regione":"LOMBARDIA"},
{"sigla":"MI","provincia":"Milano","regione":"LOMBARDIA"},
{"sigla":"BG","provincia":"Bergamo","regione":"LOMBARDIA"},
{"sigla":"BS","provincia":"Brescia","regione":"LOMBARDIA"},
{"sigla":"PV","provincia":"Pavia","regione":"LOMBARDIA"},
{"sigla":"CR","provincia":"Cremona","regione":"LOMBARDIA"},
{"sigla":"MN","provincia":"Mantova","regione":"LOMBARDIA"},
{"sigla":"LC","provincia":"Lecco","regione":"LOMBARDIA"},
{"sigla":"LO","provincia":"Lodi","regione":"LOMBARDIA"},
{"sigla":"MB","provincia":"Monza e della Brianza","regione":"LOMBARDIA"},
{"sigla":"BZ","provincia":"Bolzano","regione":"TRENTINO-ALTO ADIGE/SUDTIROL"},
{"sigla":"TN","provincia":"Trento","regione":"TRENTINO-ALTO ADIGE/SUDTIROL"},
{"sigla":"VR","provincia":"Verona","regione":"VENETO"},
{"sigla":"VI","provincia":"Vicenza","regione":"VENETO"},
{"sigla":"BL","provincia":"Belluno","regione":"VENETO"},
{"sigla":"TV","provincia":"Treviso","regione":"VENETO"},
{"sigla":"VE","provincia":"Venezia","regione":"VENETO"},
{"sigla":"PD","provincia":"Padova","regione":"VENETO"},
{"sigla":"RO","provincia":"Rovigo","regione":"VENETO"},
{"sigla":"UD","provincia":"Udine","regione":"FRIULI-VENEZIA GIULIA"},
{"sigla":"GO","provincia":"Gorizia","regione":"FRIULI-VENEZIA GIULIA"},
{"sigla":"TS","provincia":"Trieste","regione":"FRIULI-VENEZIA GIULIA"},
{"sigla":"PN","provincia":"Pordenone","regione":"FRIULI-VENEZIA GIULIA"},
{"sigla":"IM","provincia":"Imperia","regione":"LIGURIA"},
{"sigla":"SV","provincia":"Savona","regione":"LIGURIA"},
{"sigla":"GE","provincia":"Genova","regione":"LIGURIA"},
{"sigla":"SP","provincia":"La Spezia","regione":"LIGURIA"},
{"sigla":"PC","provincia":"Piacenza","regione":"EMILIA-ROMAGNA"},
{"sigla":"PR","provincia":"Parma","regione":"EMILIA-ROMAGNA"},
{"sigla":"RE","provincia":"Reggio nell'Emilia","regione":"EMILIA-ROMAGNA"},
{"sigla":"MO","provincia":"Modena","regione":"EMILIA-ROMAGNA"},
{"sigla":"BO","provincia":"Bologna","regione":"EMILIA-ROMAGNA"},
{"sigla":"FE","provincia":"Ferrara","regione":"EMILIA-ROMAGNA"},
{"sigla":"RA","provincia":"Ravenna","regione":"EMILIA-ROMAGNA"},
{"sigla":"FC","provincia":"ForlÇª-Cesena","regione":"EMILIA-ROMAGNA"},
{"sigla":"RN","provincia":"Rimini","regione":"EMILIA-ROMAGNA"},
{"sigla":"MS","provincia":"Massa-Carrara","regione":"TOSCANA"},
{"sigla":"LU","provincia":"Lucca","regione":"TOSCANA"},
{"sigla":"PT","provincia":"Pistoia","regione":"TOSCANA"},
{"sigla":"FI","provincia":"Firenze","regione":"TOSCANA"},
{"sigla":"LI","provincia":"Livorno","regione":"TOSCANA"},
{"sigla":"PI","provincia":"Pisa","regione":"TOSCANA"},
{"sigla":"AR","provincia":"Arezzo","regione":"TOSCANA"},
{"sigla":"SI","provincia":"Siena","regione":"TOSCANA"},
{"sigla":"GR","provincia":"Grosseto","regione":"TOSCANA"},
{"sigla":"PO","provincia":"Prato","regione":"TOSCANA"},
{"sigla":"PG","provincia":"Perugia","regione":"UMBRIA"},
{"sigla":"TR","provincia":"Terni","regione":"UMBRIA"},
{"sigla":"PU","provincia":"Pesaro e Urbino","regione":"MARCHE"},
{"sigla":"AN","provincia":"Ancona","regione":"MARCHE"},
{"sigla":"MC","provincia":"Macerata","regione":"MARCHE"},
{"sigla":"AP","provincia":"Ascoli Piceno","regione":"MARCHE"},
{"sigla":"FM","provincia":"Fermo","regione":"MARCHE"},
{"sigla":"VT","provincia":"Viterbo","regione":"LAZIO"},
{"sigla":"RI","provincia":"Rieti","regione":"LAZIO"},
{"sigla":"RM","provincia":"Roma","regione":"LAZIO"},
{"sigla":"LT","provincia":"Latina","regione":"LAZIO"},
{"sigla":"FR","provincia":"Frosinone","regione":"LAZIO"},
{"sigla":"AQ","provincia":"L'Aquila","regione":"ABRUZZO"},
{"sigla":"TE","provincia":"Teramo","regione":"ABRUZZO"},
{"sigla":"PE","provincia":"Pescara","regione":"ABRUZZO"},
{"sigla":"CH","provincia":"Chieti","regione":"ABRUZZO"},
{"sigla":"CB","provincia":"Campobasso","regione":"MOLISE"},
{"sigla":"IS","provincia":"Isernia","regione":"MOLISE"},
{"sigla":"CE","provincia":"Caserta","regione":"CAMPANIA"},
{"sigla":"BN","provincia":"Benevento","regione":"CAMPANIA"},
{"sigla":"NA","provincia":"Napoli","regione":"CAMPANIA"},
{"sigla":"AV","provincia":"Avellino","regione":"CAMPANIA"},
{"sigla":"SA","provincia":"Salerno","regione":"CAMPANIA"},
{"sigla":"FG","provincia":"Foggia","regione":"PUGLIA"},
{"sigla":"BA","provincia":"Bari","regione":"PUGLIA"},
{"sigla":"TA","provincia":"Taranto","regione":"PUGLIA"},
{"sigla":"BR","provincia":"Brindisi","regione":"PUGLIA"},
{"sigla":"LE","provincia":"Lecce","regione":"PUGLIA"},
{"sigla":"BT","provincia":"Barletta-Andria-Trani","regione":"PUGLIA"},
{"sigla":"PZ","provincia":"Potenza","regione":"BASILICATA"},
{"sigla":"MT","provincia":"Matera","regione":"BASILICATA"},
{"sigla":"CS","provincia":"Cosenza","regione":"CALABRIA"},
{"sigla":"CZ","provincia":"Catanzaro","regione":"CALABRIA"},
{"sigla":"RC","provincia":"Reggio di Calabria","regione":"CALABRIA"},
{"sigla":"KR","provincia":"Crotone","regione":"CALABRIA"},
{"sigla":"VV","provincia":"Vibo Valentia","regione":"CALABRIA"},
{"sigla":"TP","provincia":"Trapani","regione":"SICILIA"},
{"sigla":"PA","provincia":"Palermo","regione":"SICILIA"},
{"sigla":"ME","provincia":"Messina","regione":"SICILIA"},
{"sigla":"AG","provincia":"Agrigento","regione":"SICILIA"},
{"sigla":"CL","provincia":"Caltanissetta","regione":"SICILIA"},
{"sigla":"EN","provincia":"Enna","regione":"SICILIA"},
{"sigla":"CT","provincia":"Catania","regione":"SICILIA"},
{"sigla":"RG","provincia":"Ragusa","regione":"SICILIA"},
{"sigla":"SR","provincia":"Siracusa","regione":"SICILIA"},
{"sigla":"SS","provincia":"Sassari","regione":"SARDEGNA"},
{"sigla":"NU","provincia":"Nuoro","regione":"SARDEGNA"},
{"sigla":"CA","provincia":"Cagliari","regione":"SARDEGNA"},
{"sigla":"OR","provincia":"Oristano","regione":"SARDEGNA"},
{"sigla":"OT","provincia":"Olbia-Tempio","regione":"SARDEGNA"},
{"sigla":"OG","provincia":"Ogliastra","regione":"SARDEGNA"},
{"sigla":"VS","provincia":"Medio Campidano","regione":"SARDEGNA"},
{"sigla":"CI","provincia":"Carbonia-Iglesias","regione":"SARDEGNA"}
];

// ---------------------------------------------
// 1. Creare funzione logTop per stampa primi n elementi di un array


// Stampa primi 10 elementi di array province
console.log('\nStampa Province prima di ordinamento');


// ---------------------------------------------
// Ordinare array province per campo sigla crescente


// Stampa primi 10 elementi di array province
console.log('\nStampa Province dopo ordinamento');


// ---------------------------------------------
// Eseguire filtro per sole Province della Sicilia
var provSicilia;

// Stampa tutti gli elementi dell'array filtrato
console.log('\nStampa Province della SICILIA');


// ---------------------------------------------
// Conta il numero di province della LOMBARDIA
var countLombardia;



// Stampa numero province in Lombardia
console.log("N. " + countLombardia +  " Province in Lombardia");

// ---------------------------------------------
// Creare un array delle province con campo regione in Capital Letter
var provCapitalize;


// Stampa prime 10 elementi dell'array provCapitalize
console.log('\nStampa Province Capitalize Regione');
