const fs = require('fs');

// for each file in the folder, rename it with random keywords
fs.readdir('./output', (err, files) => {
   if (err) throw err;
   files.forEach(async (file) => {
      // get a random keyword
      const keyword = await getRandomKeywords();
      // rename the file
      fs.rename(`./output/${file}`, `./output/${keyword}.mp4`, (err) => {
         if (err) throw err;
      });
   });
});

async function getRandomKeywords() {
   const words = [
      'youtube shorts',
      'shorts',
      '#shorts',
      'hypixel',
      'hypixel skyblock',
      'hypixel bedwars',
      'bedwars',
      'skyblock',
      'aesthetic',
      'technoblade',
      'block clutch',
      'blockclutch',
      'new',
      'original content',
      'hannahxxrose',
      'sammygreen',
      'hypixel bedwars asmr',
      'asmr',
      'bedwars commentary',
      'minecraft',
      'hypixel hacking',
      'hacked hypixel',
      'fake hypixel bedwars',
      'hypixel duels',
      'hypixel skywars',
      'uhc',
      'hypixel uhc',
      'minecraft pvp',
      'bridging',
      'minecraft bridging',
      'tiktok',
      'epic tiktok',
      'foryou',
      '4yp',
      'foryp',
   ];
   // return 5 random selections from the array
   const randomWords = [];
   for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      randomWords.push(words[randomIndex]);
   }
   return randomWords.join(' ');
}
