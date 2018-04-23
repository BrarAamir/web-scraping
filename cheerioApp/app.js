var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var fs = require('fs');
var app = express();

// var url = 'https://goo.gl/8y5kj8';
// request(url, (err, resp, body) => {
//   var $ = cheerio.load(body);
//   var title = $('.jobtitle font').text();
//   var jobDescription = $('.summary p b')
//     .text()
//     .slice(17, 30);
//   var obj = {
//     title,
//     jobDescription,
//   };
//   console.log(obj);
// });
//h4

// var url = 'https://www.apporio.com/';
// request(url, (err, resp, body) => {
//   var $ = cheerio.load(body);
//   var address = $('h4.media-heading').text();
//   console.log(address);
// });

var url = 'https://www.apporio.com/';
request(url, (err, resp, body) => {
  var $ = cheerio.load(body);
  var divtext = $('div#home_contact').text();
  console.log(divtext);
});

var PORT = 8080;
app.listen(PORT, () => {
  console.log('Server Running On', PORT);
});
