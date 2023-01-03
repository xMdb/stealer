const fs = require('fs');
// if the file doesnt have the .mp4 extension, rename it
fs.readdir('./output', (err, files) => {
   if (err) throw err;
   files.forEach((file) => {
      if (!file.includes('.mp4')) {
         fs.rename(`./output/${file}`, `./output/${file}.mp4`, (err) => {
            if (err) throw err;
         });
      }
   })
});
