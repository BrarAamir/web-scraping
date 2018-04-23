const request = require('request');
const cheerio = require('cheerio');

// exports.imgScrape = (url, cb) => {
//   request(url, (err, resp, body) => {
//     if (err) {
//       cb({
//         error: err,
//       });
//     }
//     let $ = cheerio.load(body);
//     let $url = url;
//     let $img = $('.post-image img').attr('src');
//     let $title = $('.post-title').text();
//     let $desc = $('[itemprop=description]').text();

//     let image = {
//       url: $img,
//       img: 'http:' + $img,
//       title: $title,
//       description: $desc,
//     };
//     console.log('scraper file', image);
//     cb(image);
//   });
// };

exports.imgScrape2 = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, resp, body) => {
      if (err) {
        reject(err);
      }
      let $ = cheerio.load(body);
      let $url = url;
      let $img = $('.post-image img').attr('src');
      let $title = $('.post-title').text();
      let $desc = $('[itemprop=description]').text();

      let image = {
        url: $img,
        img: 'http:' + $img,
        title: $title,
        description: $desc,
      };
      console.log('scraper file', image);
      resolve(image);
    });
  });
};
