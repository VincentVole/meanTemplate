var path = require('path');
//Require the necessary controllers here.
// var Items = require('../controllers/items') <- for example

module.exports = function(app){
	app.get('/api/items', Notes.getItems);

	// app.all("*", (req, res, next)=>{
	// 	res.sendFile(path.resolve("./public/dist/index.html"));
	// })
	//^use to redirect urls not involving api. hands it over to angular's routing
}