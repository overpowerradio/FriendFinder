var express = require('express');
//calls the express npm that handles robust http routing.
var bodyParser = require("body-parser");
//call the body-parser npm

var app = express();
//is shorthand to access the express app

var path = require('path');
// is a built-in npm package that allows us to deliver html pages to user with "express" and routing.

var PORT = process.env.PORT || 8080;
//I could use any # as a port for my server to connect to that I choose. 
//The number selected number can be any number starting at 80 + (to an undefined astronomical number). Here I set it to 3000.
// app.listen(3000) is another way to write this - based on npm info explained on github.

var routeHTML = require('./app/routing/htmlRoutes.js');
var routeAPI = require('./app/routing/apiRoutes.js');
var appFriends = require('./app/data/friends.js');
// links to the relative .js files


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// -copied from the body-parser npm page- this code allows us to collect are the requests from our user and responses from our server in a format that is easy to amend.

var friendsFound = {
	name: "William Carroll",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

}
//=======  LISTENER  ==================

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});