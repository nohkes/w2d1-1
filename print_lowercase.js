var getAHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

console.log(html.toLowerCase());

}
getAHTML.getHTML(requestOptions, printLowerCase);