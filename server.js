// server.js

// 1. load http module
const http = require('http')

// 2. create the server
const server = http.createServer(function (req, res) {

    // 3. check conditions for requests
    if (req.url == '/') {

        // 4.1 set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // 4.2 set response content
        res.write('<html><body><p>This is my home Page.</p></body></html>');
        // 4.3 End response
        res.end();

    }
    else if (req.url == "/about") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is my about Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/impressum") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is my Impressum Page.</p></body></html>');
        res.end();

    }
   else {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<html><body><p>This path is not available. Invalid request</p></body></html>')
      res.end()
    }
});

// 5. server listen for any incoming requests
server.listen(3000);

console.log('My node.js web server is alive and running at port 3000')
