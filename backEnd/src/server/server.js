function webServer(options){
    var bodyParser = require("body-parser");
    var express = require("express");
    var http = require("http");

    //Instance of express
    var app = express();

    //Makes the responses easier to read
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //When content type is json, this parses it for you
    app.use(bodyParser.json());

    //Tell express where static resources are
    app.use(express.static(options.resources));

    app.get("/", function(req, res){
        res.sendFile(options.indexPage);
    });

    var httpServer = http.createServer(app).listen(options.httpPort);

    console.log("The server is listening on port: " + options.httpPort);
}

module.exports = webServer;