var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.on('request',function(req,res){
   fs.readFile('./index.html','utf-8',function(err,data){
       res.writeHead(200,{
        'content-Type': 'text/html'
       });
       res.write(data);
       res.end();
   });
});
server.listen(8080);
console.log('server running.....')