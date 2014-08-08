var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use('/', routes);

app.use(function(req, res, next){
    res.json(404, {'error': 'not found'});
});


app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Rest-Test server listening on port ' + 3000);
});

