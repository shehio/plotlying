'use strict;'
const express = require('express');
var app = express();
const config = require('./config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
var port = config.port;

app.listen(port, () => {
	console.log(`Server listening on port ${port}!`);
});
app.get('/', (request, response) => {
	response.render('preindex');
});

app.post('/', (request, response) => {
	var dates = request.body.dates;
	var values = request.body.values;
	response.render('index', { dates: dates, values: values });
});
