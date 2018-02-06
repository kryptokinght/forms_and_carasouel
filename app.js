const express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

var app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    console.log("Landing page called!!");    
    res.render("LandingPage");
}); 

app.get("/formx", function(req, res) {
   res.render("formx"); 
});

app.get("/carasouel", function(req, res) {
   res.render("carasouel"); 
});

app.post("/formx", function(req, res) {
	res.redirect("/formx");
});

app.listen(8081, "127.0.0.1", function() {
	console.log("THe monster has started!");
});