// bring in data from friends.js
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    
      app.post("/api/friends",function(req,res){
        // console.log(req.body);

        var newfriend = req.body;
        var newfriendScore = req.body.userscores;
        var totaldiff;
        var alldiff=[];

       
for (var i = 0; i < friendData.length; i++) {

for(var j = 0;j < friendData[i].length; j++){

totaldiff += Math.abs(friendData[i].scores[j] - newfriend.scores[j]);
}

alldiff.push(totaldiff);

totaldiff = 0;
};

//best match will give the smallest values 
var bestMatch = friendData[alldiff.indexOf(Math.min.apply(null, alldiff))];

res.send(bestMatch);

console.log(bestMatch);

      })
};

