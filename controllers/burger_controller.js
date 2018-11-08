var express = require("express");

var app = express.Router();

var burger = require("../models/burger");

app.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = app;