console.log("htmlRoutes.js is linked!");
var filePathTest = require('../public/pathTest.js');

// !!!!!!!!!!!! ERROR !!!!!!!!!!!!!!!!

//my file paths to my html documents are correct, but they are not publishing from the server



var express = require('express');
//calls the express npm that handles robust http routing.
var bodyParser = require("body-parser");
//call the body-parser npm

var app = express();
//is shorthand to access the express app

var path = require('path');
// is a built-in npm package that allows us to deliver html pages to user with "express" and routing.

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get("/survey", function(req, res) {
res.sendFile(path.join(__dirname, '../public/survey.html'));
});