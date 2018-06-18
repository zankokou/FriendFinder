// require npms
const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");

// require route files
// require("./app/routing/apiRoutes.js")(app);
var htmlPath = require("./app/routing/htmlRoutes.js");
var apiPath = require("./app/routing/apiRoutes.js")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



// constructor objects to connect path
var htmlRoutes = new htmlPath(app);
var apiRoutes = new apiPath(app);