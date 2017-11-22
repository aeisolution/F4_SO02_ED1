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
            
            console.log(data);
            data.forEach(function(elem) {
                $('#elenco tbody').append('<tr><td>' 
                                        + elem.id + '</td><td>' 
                                        + elem.nome + '</td><td>' 
                                        + elem.evasa + '</td><td>'
                + '<button class="btn btn-default" onclick="modifica(' + elem.id + ', \'' + elem.nome + '\', ' + elem.evasa + ')">modifica</button> ' 
                + '<button class="btn btn-danger" onclick="cancella(' + elem.id + ')">cancella</button>' 
                                        + '</td></tr>')    
            });            
        }
    });
}


function inviaDati() {
    var nomeAttivita = document.getElementById("nuovaAttivita").value;

    //Controlli di Validazione
    if(nomeAttivita.length<15) {
        return alert('Campo di lunghezza minima 15');
    }


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

function cancella(id) {
    $.ajax({
        url: '/todos/' + id,
        method: 'DELETE',
        success: function(data) {
            caricaDati();
        },
        failure: function(data) {
            alert('Errore di cancellazione: ' + data);
        }
    });
}

function modifica(id, nome, evasa) {
    $('#modificaId').val(id);
    $('#modificaAttivita').val(nome);
    $('#modificaEvasa').prop('checked', evasa);

    // Apertura finestra Modale
    $('#myModal').modal('show');
}

function updateDati() {
    var id = $('#modificaId').val();
    var nome = $('#modificaAttivita').val();
    var evasa = $('#modificaEvasa:checked').val() == 'on' ? true : false;

    $.ajax({
        url: '/todos/' + id,
        method: 'PUT',
        data: {
            id: id,
            nome: nome,
            evasa: evasa
        },
        success: function(data) {
            $('#myModal').modal('hide');
            caricaDati();
        },
        failure: function(data){
            alert('Errore Salvataggio dati');
        }
    });
}