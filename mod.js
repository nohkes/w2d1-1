var getNewHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getNewHTML.getHTML(requestOptions, getNewHTML.printHTML);