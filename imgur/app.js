const scraper = require('./scraper');
const fs = require('fs');
const path = 'text.txt';
const url = 'http://imgur.com/gallery/hj4NW';

//callback
// scraper.imgScrape(url, data => {
//   console.log('data from scraper recieved');
//   console.log(data);
// });

scraper
  .imgScrape2(url)
  .then(data => {
    console.log('data from scraper recieved');
    fs.writeFile(path, JSON.stringify(data), error => {
      if (error) {
        console.log(error);
      }
      console.log('successfully wrote to' + path);
    });
  })
  .catch(error => {
    console.log(error);
  });
