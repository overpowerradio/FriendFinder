var friends = require("../data/friends.js"); //requires the friends.js that contains the friend objects

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends); //the module.exports sends this function to the serve file (requiring it) and when the user inputs "http://localhost:3330/api/friends" it's going to print all the objects in the friends.js
	})
}

