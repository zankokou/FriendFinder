// require npms
const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");

// require route files
var htmlPath = require("./app/routing/htmlRoutes.js");
var apiPath = require("./app/routing/apiRoutes.js")

// require friendList 
var friendList = require('./app/data/friends.js')


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friendList.push(newFriend);
    res.json(newFriend);
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



// constructor objects to connect path
var htmlRoutes = new htmlPath(app);
var apiRoutes = new apiPath(app);