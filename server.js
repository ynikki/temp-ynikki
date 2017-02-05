const express = require('express');
const app = express();
var path = require('path');
var pug = require('pug');
var util = require('util');
var bodyParser = require('body-parser');

const PORT = 8080;

const public = path.join(__dirname, 'public');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));

app.use('/', express.static(public));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/hacc', function(req, res) {
  res.render('hacc', {page: 'HACC 2016'});
});

app.get('/stylesforhue', function(req, res) {
  res.render('stylesforhue', {page: 'Styles For Hue'});
});

app.get('/nko', function(req, res) {
  res.render('nko', {page: 'Node Knockout'});
});

app.use('/404', function (req, res) {
  res.status(404).render('404');
});

const server = app.listen(PORT, function () {
  console.log('Now listening on PORT:' + PORT);
});