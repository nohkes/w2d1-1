var https = require('https');

module.exports ={

 getHTML: function (options, callback) {
	https.get(options, function (response) {

  	response.setEncoding('utf8');

 
  	data = '';
  	response.on('data', function(chunk){
  		data += chunk;
  	});
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  	response.on('end', function() {
    	console.log('Response stream complete.', callback(data));
  	});

});

}, 

printHTML: function(html) {
  console.log(html);
}




}