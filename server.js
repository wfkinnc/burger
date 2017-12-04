//-------------------------------------------------------------- 
// server.js file for the burger application
//--------------------------------------------------------------

// references express, method-override and bodyparser
var express         = require("express");
var bodyParser      = require("body-parser");
var methodOverride  = require("method-override");
var mysql           = require("mysql");

//instantiating express
var app     = express();
var port    = 3000;

// sets a static content to public directory
app.use(express.static("public"));

// sets the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// setting up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// require the connection page for mysql

//var conn = require("config/connection.js")
// Routes

var routes = require("./controllers/burgers_controller.js")

// app.get("/", function(req, res) {
//     res.render("index");
//   });

// this is the index router..and uses the routes file which is the burgers_controller..
app.use("/", routes);

// listents on the port
  app.listen(port);
