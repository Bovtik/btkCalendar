var express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var server = express();

var BtkCalc = require('./btkCalc');

/*
var baseHTML = ReactDOMServer.renderToString(
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <title>btkCalendar</title>
    </head>
    <body>
      <div id="appContainer"></div>

      <script src="React/react.min.js"></script>
      <script src="React/react-dom.min.js"></script>
      <script src="main.js"></script>
    </body>
  </html>
);
*/

server.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var html = ReactDOMServer.renderToString(React.createElement(
    'html',
    { lang: 'en' },
    React.createElement(
      'head',
      null,
      React.createElement('meta', { charSet: 'UTF-8' }),
      React.createElement(
        'title',
        null,
        'btkCalendar'
      )
    ),
    React.createElement(
      'body',
      null,
      React.createElement(
        'div',
        { id: 'appContainer' },
        React.createElement(BtkCalc, null)
      )
    )
  ));
  res.end("<!DOCTYPE html>" + html);
});

server.listen(80);

console.log('Server running at http://localhost:80/');