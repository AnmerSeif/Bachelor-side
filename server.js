// server.js
// load the things we need
var express = require('express');
var app = express();

// Path module
var path = require('path');

// Blog module
Poet = require('poet');
var poet = require('poet')(app);

poet.watch(function() {
    console.log("Updated posts");
}).init().then(function() {});

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var helmet = require('helmet')
app.use(helmet())


// use res.render to load up an ejs view file

// index side
app.get('/', function(req, res) {
    res.redirect('/om-oss');
});

// Om Oss side
app.get('/om-oss', function(req, res) {
    res.render('pages/om-oss');
});

// Dokumentasjons side
app.get('/dokumentasjon', function(req, res) {
    res.render('pages/dokumentasjon');
});


// Dokumentasjons side
app.get('/prosjekt-dagbok', function(req, res) {
    res.render('pages/prosjekt-dagbok');
});

app.listen(8080);
console.log('8080 is the magic port');
