const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static(__dirname + '/public'));

app.use('/404', function (req, res) {
  res.status(404).render('404');
});

const server = app.listen(PORT, function () {
  console.log('Now listening on PORT:' + PORT);
});