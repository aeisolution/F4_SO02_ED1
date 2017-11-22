// COdice di elaborazione client per pagina index.html

$("#btnCarica" ).on("click", function( event ) {
  caricaDati();
});

$("#btnInvia" ).on("click", function( event ) {
  inviaDati();
});


function caricaDati() {
    // interrogare il server per elenco todos
    // GET /todos/
    $.ajax({
        url: "/todos",
        method: "GET",
        success: function(data) {
            $('#elenco tbody').html('');
            
            data.forEach(function(elem) {
                $('#elenco tbody').append('<tr><td>' 
                                        + elem.id + '</td><td>' 
                                        + elem.nome + '</td><td>' 
                                        + elem.evasa + '</td></tr>')    
            });            
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
            $('#elenco tbody').append('<tr><td>' 
                                    + data.id + '</td><td>' 
                                    + data.nome + '</td><td>' 
                                    + data.evasa + '</td></tr>');    
        }
    });
}