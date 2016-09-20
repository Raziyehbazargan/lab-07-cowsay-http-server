'use strict';

//node modules
const http = require('http');
const url = require('url');
const queryString = require('querystring');

//npm modules
const cowsay = require('cowsay');

//app modules
const parseBody = require('./lib/parse-body.js');

//module constants
const PORT = process.env.PORT || 3000;


//module logic
const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = queryString.parse(req.url.query);

  if (req.method === 'GET' && req.url.pathname === '/') {
    res.writeHead( 200, { 'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }

  if(req.method === 'GET' && req.url.pathname === '/cowsay') {
    if (req.url.query.text) {
      res.writeHead(200);
      res.write(cowsay.say({text:req.url.query.text}));
      res.end();
    } else {
      res.writeHead(400);
      res.write(cowsay.say({text:'bad request\ntry: localhost:3000/cowsay?text=howdy'}));
      res.end();
    }
  }

  if (req.method === 'POST' && req.url.pathname === '/cowsay') {
    parseBody(req, function(err){
      if (err) return console.error(err);
      if(req.body.text){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.write(cowsay.say({text:req.body.text}));
        res.end();
      } else {
        res.writeHead(400,{'Content-Type': 'text/plain'});
        res.write(cowsay.say({text:'bad request\ntry: localhost:3000/cowsay?text=howdy'}));
        res.end();
      }
    });
  }
});

server.listen(PORT, function() {
  console.log('server up on port --> ', PORT );
});