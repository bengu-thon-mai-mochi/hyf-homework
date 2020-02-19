const http = require('http'),
      url = require('url'),
 
makeServer = function (request,response){
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('node warm up');
   response.end();
 },

server = http.createServer(makeServer);
server.listen(3000);