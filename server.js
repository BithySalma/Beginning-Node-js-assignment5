const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is Home Page');
        res.end();

    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is About Page');
        res.end();

    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is Contact Page');
        res.end();

    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('Error writing to file');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File created and text written');
                res.end();
            }
        });
    } 
});


server.listen(3000)
console.log('Server is listening on port');

