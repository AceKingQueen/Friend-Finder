// LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
      app.post("/api/friends",function(req,res){
          console.log(req.body)
        var newfrnd=req.body;
        var newfrndScore=req.body.userscores;
        var totaldiff;
        var alldiff=[ ];

       
for(var i=0;i<friendData.length;i++){
   // console.log(friendData[i])
for(var j=0;j<friendData[i].length;j++){
totaldiff +=Math.abs(friendData[i].scores[j] - newfrnd.scores[j]);
}
alldiff.push(totaldiff);
totaldiff =0;
}

//best match will give the smallest values 
var bestMatch = friendData[alldiff.indexOf(Math.min.apply(null, alldiff))];

res.send(bestMatch);
console.log(bestMatch);
// newFriend.push(friends); 

      })







};

//app.get("/blocks, function(request, response) {
//var blocks = ["fixed", "movable", "rotating"];
// response.json(blocks) --> will return a JSON for objects and arrays
//reponse.send(string) --> will return a string
// };

//returns a JSON for objects and arrays