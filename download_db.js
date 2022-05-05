const https = require('https');
var fs = require('fs');

var bz2 = require('unbzip2-stream');

const url = 'https://www.senarclens.eu/~gerald/teaching/Northwind_large.sqlite.bz2';
const filename = 'northwind.sqlite';
const file = fs.createWriteStream(filename);
const request = https.get(url, function(response) {
   response.pipe(bz2()).pipe(file);

   // after download completed close filestream
   file.on('finish', () => {
       file.close();
       console.log(`Wrote ${filename}`);
   });
});
