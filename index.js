var express = require('express');
var logger = require('morgan');
var sortJson = require('sort-json');
const requestIp = require('request-ip');

var port = process.env.PORT || 3500;
var app = express();
app.use(logger());

var ip = require('ip');

app.get('/', (request, response) => {
  var result = {
    ipaddress: requestIp.getClientIp(request),
    language: request.headers['accept-language'].split(',')[0],
    software: request.headers['user-agent'].split('(')[1].split(')')[0]
  };

  response.json(sortJson(result));
});

app.listen(port)
