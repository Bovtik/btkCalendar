var express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    fs = require('fs'),
    path = require('path');

var server = express();

var App = require('../components/btkCalendar'),
    Layout = require('../components/layout');

server.use('/client', express.static(path.join(path.join(__dirname, '..'), 'client')));

server.use('/server', express.static(path.join(path.join(__dirname, '..'), 'server')));

server.use('/components', express.static(path.join(path.join(__dirname, '..'), 'components')));

server.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var content = ReactDOMServer.renderToString(React.createElement(App, null));

  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Layout, { content: content }));
  res.end("<!DOCTYPE html>" + html);
});

server.listen('80', '127.0.0.1');

console.log('Server running at http://localhost:80/');