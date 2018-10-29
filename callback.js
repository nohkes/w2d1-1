var https = require('https');
var data = '';
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

https.get(options, function (response) {


  // set encoding of received data to UTF-8
  	response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  // response.on('data', function (data) {
  //   console.log('Chunk Received:', data);
  // });

  	response.on('data', function(chunk){
  		data += chunk;
  	});
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  	response.on('end', function() {
    	console.log('Response stream complete.', callback(data));
  	});

});
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);