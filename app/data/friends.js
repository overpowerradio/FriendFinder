var friends = [
{
	name: "William Carroll",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [
	"5", 
	"5", 
	"5", 
	"5", 
	"5", 
	"5", 
	"5", 
	"5", 
	"5", 
	"5"]
},
{
	name: "Lauryn Hill",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [
	"4", 
	"2", 
	"4", 
	"4", 
	"5", 
	"4", 
	"5", 
	"3", 
	"2", 
	"2"]
},
{
	name: "Beyonce Carter",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [
	"3", 
	"4", 
	"2", 
	"2", 
	"4", 
	"5", 
	"5", 
	"3", 
	"3", 
	"3"]
},
{
	name: "Andre Benjamin",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [
	"5", 
	"4", 
	"3", 
	"2", 
	"1", 
	"5", 
	"4", 
	"3", 
	"2", 
	"4"]
},
{
	name: "Kamal Fareed",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [
	"5", 
	"5", 
	"3", 
	"1", 
	"2", 
	"1", 
	"5", 
	"5", 
	"4", 
	"4"]
}
]

module.exports = friends; //this is another way of exporting variables/objects from a Javascript file. Now, the file that REQUIRES this file can access the variable globally within it's code. Example: in the apiRoutes.js we have code to "res.json(friends)" that's picking up this variable from that file.