// COdice di elaborazione client per pagina index.html

$("#btnInvia" ).on("click", function( event ) {
  inviaDati();
});

function handlerRow() {
    /*
    $(".btn_change_edit" ).on("click", function( event ) {
        $(this).closest('tr').toggleClass('edit');
        
    });
    */
}


// Definzione funzioni base
function caricaRiga(elem) {
    $('#elenco tbody').append('<tr><td>' 
        + '<span>' + elem.nome + '</span>' 
        + '<input name="id" type="hidden" value="' + elem._id + '" />'
        + '<input name="nome" type="text" value="' + elem.nome + '" />'
        + '</td><td>' 
        + '<div class="btn_edit">'
        + '<button class="btn btn-default btn_change_edit">annulla</button> ' 
        + '<button class="btn btn-success btn_salva">salva</button>' 
        + '</div>'

        + '<div class="btn_view">'
        + '<button class="btn btn-default btn_change_edit">modifica</button> ' 
        + '<button class="btn btn-danger" onclick="cancella(\'' + elem._id + '\')">cancella</button>' 
        + '</div>'
        + '</td></tr>');

        $("#elenco tbody tr:last .btn_change_edit" ).on("click", function( event ) {
            $(this).closest('tr').toggleClass('edit');
        });        

        $("#elenco tbody tr:last .btn_salva" ).on("click", function( event ) {
            var tr = $(this).closest('tr');
            var id = tr.find('[name="id"]').val();
            var nome = tr.find('[name="nome"]').val();
            
            updateDati(id, nome);
        });        

}


function filtraDati() {
    var cerca = $('#strCerca').val();

    // GET /api/categorie/
    $.ajax({
        url: "/api/categorie?cerca=" + cerca,
        method: "GET",
        success: function(data) {
            $('#elenco tbody').html('');
            
            data.forEach(function(elem) {
                caricaRiga(elem);
            });            
            //handlerRow();    
        }
    });
    
}


function inviaDati() {
    var nomeCategoria = document.getElementById("nuovaCategoria").value;

    $.ajax({
        url: "/api/categorie",
        method: "POST",
        data: {
            nome: nomeCategoria
        },
        success: function(obj) {
            caricaRiga(obj.ops[0]);    
            //handlerRow();    

            toastr.success('Record salvato');
        } 
    });
}

function cancella(id) {

    $.ajax({
        url: '/api/categorie/' + id,
        method: 'DELETE',
        success: function(data) {
            toastr.success('Record cancellato')
            filtraDati();
        },
        failure: function(data) {
            toast.error('Errore di cancellazione: ' + data);
        }
    });
}

function updateDati(id, nome) {

    $.ajax({
        url: '/api/categorie/' + id,
        method: 'PUT',
        data: {
            id: id,
            nome: nome
        },
        success: function(data) {
            filtraDati();
        },
        failure: function(data){
            alert('Errore Salvataggio dati');
        }
    });
}