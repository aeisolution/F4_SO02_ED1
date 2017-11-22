// COdice di elaborazione client per pagina index.html

function caricaDati() {
    // interrogare il server per elenco todos
    // GET /todos/
    $.ajax({
        url: "/todos",
        method: "GET",
        success: function(data) {
           var tb = document.getElementById('elenco');
           var tbody = tb.getElementsByTagName('tbody')[0];
           
           tbody.innerHTML = '';

           for(var i=0;i< data.length; i++){
                tbody.innerHTML +=  '<tr><td>' 
                                        + data[i].id + '</td><td>' 
                                        + data[i].nome + '</td><td>' 
                                        + data[i].evasa + '</td></tr>';
           }
        }
    });
}


function inviaDati() {
    var nomeAttivita = document.getElementById("nuovaAttivita").value;

    $.ajax({
        url: "/todos",
        method: "POST",
        data: {
            nome: nomeAttivita
        },
        success: function(data) {
           var tb = document.getElementById('elenco');
           var tbody = tb.getElementsByTagName('tbody')[0];

           tbody.innerHTML += '<tr><td>' 
                                        + data.id + '</td><td>' 
                                        + data.nome + '</td><td>' 
                                        + data.evasa + '</td></tr>';
        }
    });
}