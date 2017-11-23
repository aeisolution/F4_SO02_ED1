// Creazione Middleware di autorizzazione
app.use(function(req, res, next){
    console.log(req.query);
    if(req.query.key=='autorizzato') {
        req.username = 'Andrea';
        next();
    } else {
        res.status(401).send('Utente non autorizzato');
    }
});