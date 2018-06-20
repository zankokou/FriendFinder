var path = require("path");
var friendList = require('../data/friends.js')

// routes
module.exports = function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendList);


    });


};