var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
const cors = require('cors');

var app = express();

app.use(cors());
// app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(bodyParser.json({extended: true}));
// app.use(session({secret: 'secret'}));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(req, res){
	console.log('listening at port 8000');
})