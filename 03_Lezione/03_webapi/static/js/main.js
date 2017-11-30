// COdice di elaborazione client per pagina index.html

var page = 1;

function nextPage() {
    page++;
    filtraDati(page);
}

function prevPage() {
    if(page>1) {
        page--;
        filtraDati(page);
    } 
}

$("#btnCarica" ).on("click", function( event ) {
  caricaDati();
});

$("#btnInvia" ).on("click", function( event ) {
  inviaDati();
});

// Definzione funzioni base
function caricaRiga(elem) {
    $('#elenco tbody').append('<tr><td>' 
        + '<input name="id" type="hidden" value="' + elem._id + '" />'           
        + '<input name="nome" type="hidden" value="' + elem.nome + '" />'           
        + '<input name="categoria" type="hidden" value="' + elem.categoria + '" />'           
        + '<input name="evasa" type="hidden" value="' + elem.evasa + '" />'           
        + elem.nome + '</td><td>' 
        + elem.categoria + '</td><td>' 
        + elem.evasa + '</td><td>'
        + '<button class="btn btn-default btn_modifica">modifica</button> ' 
        + '<button class="btn btn-danger" onclick="cancella(\'' + elem._id + '\')">cancella</button>' 
        + '</td></tr>');

    $('#elenco tbody tr:last .btn_modifica').on('click', function(event){
        var tr = $(this).closest('tr');
        modifica(tr);
    });
}


function caricaDati() {
    // interrogare il server per elenco todos
    // GET /todos/
    $.ajax({
        url: "/todos",
        method: "GET",
        success: function(data) {
            $('#elenco tbody').html('');
            
            data.forEach(function(elem) {
                caricaRiga(elem);    
            });            
        }
    });
}

function filtraDati(page) {
    var cerca = $('#strCerca').val();

    console.log('filtraDati(' + page + ')');

    // GET /todos/
    $.ajax({
        url: "/todos?cerca=" + cerca +"&page=" + page,
        method: "GET",
        success: function(data) {
            $('#elenco tbody').html('');
            
            data.forEach(function(elem) {
                caricaRiga(elem);    
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
        success: function(obj) {
            caricaRiga(obj.ops[0]);    
            toastr.success('Record salvato');
        } 
    });
}

function cancella(id) {
    console.log('cancella(' + id + ')');
    $.ajax({
        url: '/todos/' + id,
        method: 'DELETE',
        success: function(data) {
            toastr.success('Record cancellato')
            caricaDati();
        },
        failure: function(data) {
            toast.error('Errore di cancellazione: ' + data);
        }
    });
}

function modifica(tr) {
    var id          = tr.find('[name="id"]').val();
    var nome        = tr.find('[name="nome"]').val();
    var categoria   = tr.find('[name="categoria"]').val();
    var evasa       = tr.find('[name="evasa"]').val();

    $('#modificaId').val(id);
    $('#modificaAttivita').val(nome);
    $('#modificaCategoria').val(categoria);
    $('#modificaEvasa').prop('checked', evasa);

    // Apertura finestra Modale
    $('#myModal').modal('show');
}

function updateDati() {
    var id = $('#modificaId').val();
    var nome = $('#modificaAttivita').val();
    var categoria = $('#modificaCategoria').val();
    var evasa = $('#modificaEvasa:checked').val() == 'on' ? true : false;

    $.ajax({
        url: '/todos/' + id,
        method: 'PUT',
        data: {
            id: id,
            nome: nome,
            categoria: categoria,
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