var express = require('express');
var request = require('request');

var fs = require('fs');
var app = express();

// var url = 'http://google.com';
// request(url, (err, resp, body) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(body);
//   }
// });

// var url = 'http://google.com';
// var destination = fs.createWriteStream('google2.html');
// request(url).pipe(destination);

var url = 'http://google.com';
var destination = fs.createWriteStream('google3.html');
request(url)
  .pipe(destination)
  .on('finish', () => {
    console.log('all done');
  })
  .on('error', err => {
    console.log(err);
  });

var PORT = 8080;
app.listen(PORT, () => {
  console.log('Server Running On', PORT);
});
