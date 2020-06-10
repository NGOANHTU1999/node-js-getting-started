var http = require('http');
var lanthu = 0;
function XuLyWeb ( req, res) {
    lanthu++;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Server V3 - Hello World!'
  + "<br> http://127.0.0.1:8080/"
  + "<br> localhost:8080"
  + "<br> lan thu - " + lanthu
);
console.log("\n\t...lan thu -" + lanthu);
};
http.createServer(XuLyWeb).listen(8080);
  
console.log("Node.js dang RUN server !");