console.log("htmlRoutes.js is linked!"); //"htmlRoutes.js" is being required from the server.js. This console.log is just to confirm that we're using the correct file path to reach this folder.

var filePathTest = require('../public/pathTest.js'); //this var "filePathTest" is just to make sure that my file paths to my .html documents are accessing the correct foloder. "pathTest.js" simply prints a console.log to confirm the file path.

var path = require('path'); // This is a built-in npm package that allows us to deliver html pages to users with "express" and routing.

module.exports = function (app){
	//module.exports is how you can send data back to the file that (require)s this file. In our case it's the server.js.
	
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	//Here, we use the tradition way of recording user input from the url. Whenever they type "localhost:3330/survey" the server responds with our survey.html.

	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
	//"app.use()" is an alternative to using "app.get("/")" for routing to the home page. It tells express to "use" whatever PORT is being assigned to the server. We responded the server requests on that port using "path.join" to direct the user to our home page "/../public/home.html"

	//Through trial and error I learned that if I were to list this "app.use" first, that this will be the only page that publishes, so we would have to route to the home page last in this section of the function, otherwise, just use "app.get("/", function(req, res)" to route the .html to the home page.

	
}
