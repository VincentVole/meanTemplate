var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/meanTemplate');//INSERT YOUR IP(localhost) and DB NAME HERE
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
//^this just finds the model files and hooks them up.