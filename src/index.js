var http = require("http");
require("dotenv/config");

http.createServer(function(req,res) {
    res.write("Hello World!");
    res.end();
}).listen(process.env.LISTEN_PORT);