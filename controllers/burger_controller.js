var express = require("express");


var app = express.Router();

var burger = require("../models/burger");

app.get("/", function (req, res) {

    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create([
        "burger_name"
    ], [
            req.body.name
        ], function (result) {

            
            burger.all(function (data) {
                var hbsObject = {
                    burger: data
                };
                res.render("index", hbsObject);
            });

        });

});

app.put("/api/burgers/:id", function (req, res) {
    var condition = "id=" + req.params.id;

    console.log("condition", req.body);

    burger.update(
        req.body,
        condition, function (result) {
            burger.all(function (data) {
                var hbsObject = {
                    burger: data
                };
                res.render("index", hbsObject);
            });

            // console.log(result);
            // res.render("root");
        });
});

module.exports = app;