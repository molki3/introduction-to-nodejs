/*
Event Loop
The code in node is executed in a sync way, so the events o functions are gonna be sended to processing or waiting process.
Execute: 11-eventloop.js
*/

const http = require('http');

/*
At the following example, we execute a BLOCKING CODE at /about, 
so if we try to load / when de /about is loading, we are gonna have to wait the blocking code finish the process to see /home page
*/

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.write('Home');
        return res.end();    
    }

    if(req.url === '/about'){

        for(let i=0;i<50000;i++){
            console.log(i);
        }

        res.write('About');
        return res.end();    
    }

    res.write('Not found');
    return res.end();

});

server.listen(4000);