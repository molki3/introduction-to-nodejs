const http = require('http');
const {createReadStream} = require('fs');


const port = 3000;

const server = http.createServer((req, res) => {
    const stream = createReadStream('./7-data/16-bigFile.txt', 'utf-8');

    stream.on('data', (chunk) => {
        // PIPE sends the data (chunk) to another function, in this case to res
        stream.pipe(res);
    })

    stream.on('error', error => {
        console.log(error);
    })
})

server.listen(port);
console.log(`server on port ${port}`)