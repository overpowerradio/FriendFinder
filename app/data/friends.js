console.log("friends.js is linked!");

var friends = [{

	name: "William Carroll",
	photo: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-1/p480x480/17904456_10154488157505686_6242993846905690849_n.jpg?oh=0f9ba24b612206bf3e416f94c53e1aeb&oe=59EC9AA6",
	scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

}];

 $("#submit").on("click", function(event) {
      event.preventDefault();
      var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        };

      // creates a friend object

      $.post("http://localhost:8080/api/new", friends)
  //this posts the new friend to the "friends" object array.
      .done(function(data) {

        console.log(data);

       

      });