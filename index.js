const tiktok = require('tiktok-scraper-without-watermark');
const fs = require('fs');
const { DownloaderHelper } = require('node-downloader-helper');

// for each url in the urls.txt file, scrape the video and save it to the folder
fs.readFile('urls.txt', 'utf8', (err, data) => {
   if (!fs.existsSync('output')) fs.mkdirSync('output');
   if (err) throw err;
   const urls = data.split('\n');
   urls.forEach((url) => {
      tiktok
         .tiktokdownload(url)
         .then((result) => {
            const dl = new DownloaderHelper(result.nowm, `./output`);
            dl.start().then(() => {
               console.log(`${url} downloaded`);
            });
         })
         .catch((e) => console.log(e));
   });
});
