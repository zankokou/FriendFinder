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
        // Initialize array to hold comparison results
        var smallest = 10000000;
        var bestie;

        //For loop through each friend in friendList
        for (var i = 0; i < friendList.length; i++) {
            // Array to total the differences in scores for potential matches
            var compArray = [];

            for (var j = 0; j < friendList[i].scores.length; j++) {
                compArray.push(Math.abs(friendList[i].scores[j] - req.body.scores[j]));

            }
            var matchScore = compArray.reduce((a, b) => a + b, 0);

            if (matchScore < smallest) {
                smallest = matchScore;
                bestie = friendList[i];
            }
        }

        // Return best match to client
        res.json(bestie);

        // Add current user to friendList
        friendList.push(req.body);

    });

// });



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



// constructor objects to connect path
var htmlRoutes = new htmlPath(app);
var apiRoutes = new apiPath(app);