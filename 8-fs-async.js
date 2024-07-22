/*
FS ASYNC
Execute: 8-fs-async.js
*/

const { error } = require('console');
const fs = require('fs');


/*readFile: Read file async way, execute the read to that path, then execute the function */
fs.readFile('./7-data/first.txt', 'utf-8', (error, data) => {
    if(error) console.log(error);
    console.log(data);

    fs.readFile('./7-data/second.txt', 'utf-8', (error, data) => {
        if(error) console.log(error);
        console.log(data);
    });

});