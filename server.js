var app = require('./app');
var http = require('http');

http.createServer(app)
  .listen(process.env.DA_PORT || 3000, function(err) {
  console.log("Server listening on http://localhost:" + (process.env.DA_PORT || 3000));   
 });
