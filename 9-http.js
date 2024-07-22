/*
HTTP MODULE: SERVER
Execute: node 9-http.js
*/

const http = require("http");

/*
Create Server
A server have to be listing to all time, so a function has to be open here (request and response)
*/

/*
Opcion 1:
*/
const server = http.createServer((request, response) => {
/*
Opcion 2:
http.createServer((request, response) => {
*/


  console.log(request.url);

  if (request.url === "/") {
    response.write("<h1>Home</h1>");
    return response.end;
  }

  if (request.url === "/about") {
    response.write("<h1>About</h1>");
    return response.end;
  }

  response.write(`
        <h1>Not found</h1>
        <p>This page has not be found</p>
    `);
  response.end;

/*
Opcion 1:
*/
});
server.listen(4000);

/*
Opcion 2:
}).listen(4000);
*/

console.log("Listening to in the port 4000");
