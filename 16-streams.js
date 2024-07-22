/*
STREAMS
It is the way to make a big streams in divided parts file
*/

// const {writeFile} = require('fs/promises');


// const writeBigFile = async () => {
//     await writeFile('./7-data/16-bigFile.txt', 'Hello World'.repeat(50000));
// }

// writeBigFile();

const { error } = require('console');
const {createReadStream} = require('fs');


const stream = createReadStream('./7-data/16-bigFile.txt', 'utf-8');


/**
STREM EVENTS 
*/

stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('end', () =>{
    console.log('The process has been ended');
})

stream.on('error', (error) => {
    console.log(error);
})