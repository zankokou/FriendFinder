var path = require("path");
var friendList = require('../data/friends.js')

// routes
module.exports = function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendList);

   
    });


    // post link
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        
    });



};

