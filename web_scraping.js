const rp = require('request-promise');
const url = 'https://www.mydealz.de/';
const $ = require('cheerio');

rp(url)
    .then(function(html){
        var titles = $('.cept-tt', html);
        for(var i = 0; i < titles.length; i++) {
            console.log(titles[i].attribs.title);
        }
    })
    .catch(function(err){
        console.log(err);
    });
