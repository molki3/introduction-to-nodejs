/*
FS MODULE: Manage files
Execute: node 7-fs.js
*/

const fs = require('fs');


/*readFileSync: First way to read files*/
const first = fs.readFileSync('./7-data/first.txt', 'utf-8');
console.log(first);

/*readFileSync: Second way to read files*/
const second = fs.readFileSync('./7-data/second.txt');
console.log(second.toString());

/*writeFileSync: Write to files*/
let content = 'hi';
fs.writeFileSync('./7-data/third.txt', content);