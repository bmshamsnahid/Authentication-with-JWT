var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var session = require('express-session');

var config = require('./config');

var router = require('./app/routes');

var port = process.env.PORT || 3000;
mongoose.connect(config.database.db, (err) => {
    if(err) {
        console.log('Error in connecting database : ' + config.database.db + " Error: " + err);
        res.send(500, {err: err});
    }
});

app.set('superSecret', config.database.mySecret);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(logger('dev'));

app.use('/api', router);

app.listen(port);
console.log('Server running on port: ' + port);