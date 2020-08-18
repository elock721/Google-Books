var express = require("express");
const path = require ("path");
const routes = require("./routes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname, 'build')));
app.use(routes);
// Routes
// =============================================================

// Listener 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });