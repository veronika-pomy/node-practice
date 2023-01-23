const http = require('http');

const server = http.createServer(( req, res ) => {
    if (req.url === '/') {
        res.end('Welcome to the home page!!!');
    }
    if (req.url === '/about') {
        res.end('Here is some info about me!');
    }
    res.end(`
        <h1>Sorry! Something went wrong.</h1>
        <p>Looks like the page you requested does not exist</p>
        <a href = "/">Go back home</a>
    `)
});

server.listen(5500);
//first got an error 5000 port in use

// getting an error not sure why 

// //veronika@VeronikasLaptop node-practice % node app.js
// node:events:491
// throw er; // Unhandled 'error' event
// ^

// Error [ERR_STREAM_WRITE_AFTER_END]: write after end
// at new NodeError (node:internal/errors:400:5)
// at ServerResponse.end (node:_http_outgoing:987:15)
// at Server.<anonymous> (/Users/veronika/Desktop/nwu-bootcamp/pad/node-practice/app.js:10:9)
// at Server.emit (node:events:513:28)
// at parserOnIncoming (node:_http_server:1065:12)
// at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)
// Emitted 'error' event on ServerResponse instance at:
// at emitErrorNt (node:_http_outgoing:846:9)
// at process.processTicksAndRejections (node:internal/process/task_queues:83:21) {
// code: 'ERR_STREAM_WRITE_AFTER_END'
