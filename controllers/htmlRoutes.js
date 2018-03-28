var path = require("path");


module.exports = function(app){


app.get("/", function(req, res){

	console.log("index.html")
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
})

app.get("/admin", function(req, res){
	console.log("html rendering")

	res.sendFile('admin.html', { root: path.join(__dirname, '../public') });
})




}