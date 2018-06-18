var path = require("path");

// routes
module.exports = function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        return res.json("api Friends List");

        // res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });


    // post link
    app.post("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });



};