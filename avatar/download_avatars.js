var request = require('request');
var getToken = require('./secrets.js'); 
//acquire the token
var fs = require('fs');
var args = process.argv.slice(2);
//using the command line to input the specific repos

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + args[0] + "/" + args[1] + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + getToken.GITHUB_TOKEN
    }
}

request(options, function(err, res, body) {
    var data = JSON.parse(body)
    var arr = [];
    // array in which the avatar urls were pushed into
    var loginArr = []
    //array in which the login data to name the pictures
    for(var i = 0; i < data.length; i++){
    	arr.push(data[i].avatar_url)
    	loginArr.push(data[i].login + '.jpg')
    }
    downloadImageByURL(arr, loginArr)
    cb(err, arr);
  });
}

function downloadImageByURL(url, filePath) {
	for (var j = 0; j < url.length; j++){
		request.get(url[j])
		.on('error', function (err) {
         throw err; 
       })
 .pipe(fs.createWriteStream('./profile/single/' + filePath[j]));
 }  
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// + getToken.GITHUB_TOKEN 