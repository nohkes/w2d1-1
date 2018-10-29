var request = require('request');
var getToken = require('./secrets.js'); 


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + getToken.GITHUB_TOKEN
    }
}

request(options, function(err, res, body) {
    var data = JSON.parse(body)
    var arr = [];
    for(var i = 0; i < data.length; i++){
    	arr.push(data[i].avatar_url)
    }
    cb(err, arr);
  });
}




getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// + getToken.GITHUB_TOKEN