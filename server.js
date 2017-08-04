//start your server

var express = require('express'); //express npm package is used for dynamic http routing
var app = express(); //the "app" var is just a shorthand way to access the FUNCTION

var bodyParser = require('body-parser'); // is a built-in npm package that allows us to deliver html pages to the user with EXPRESS routing

var PORT = process.env.PORT || 3330; // "process.env.PORT" is a default for 3rd party hosting that will allow them to assign your server to a port after you upload it. // "|| 3330" ...and indicating a local port that can be whatever number we assign, but in this case it's "3330".

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false }); // creates application/x-www-form-urlencoded parser //we need to know what the difference is between true/false here. On the npm page it's "false", but in our class activities it is assigned to "true".

app.use(bodyParser.json({ type: 'application/*+json' })); //parse various different custom JSON types as JSON

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' })); //parse some custom thing into a buffer

app.use(bodyParser.text({ type: 'text/html'})); // parse an HTML body into a string

// what is the difference between "/vnd.custom-type" and " /vnd.api+json" [ex: app.use(bodyParser.json({ type: "application/vnd.api+json" })) ] - - we were directed to use this way in the Star Wars App exercise.

require('./app/routing/htmlRoutes.js')(app); //"(app) passes the express module into the "htmlRoutes.js" file w/o having to create the variables to call the express module inside the "htmlRoutes.js" file itself.

require('./app/routing/apiRoutes.js')(app); //Here, we're doing the same for apiRoutes.js.



app.listen(PORT, function(req, res){
	console.log("Your server is running on port " + PORT);
});