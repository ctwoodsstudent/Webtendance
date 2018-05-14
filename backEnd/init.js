var webServer = require("./src/server/server.js");
var datamodel;
var server;

var serverOptions = {
    baseURL: global.baseURL,
    httpPort: 8080,
    resources: __dirname + "/public",
    indexPage: __dirname + "/public/index.html"
};

global.baseURL = "http://localhost" + ":" + serverOptions.httpPort;

function init () {
    server = new webServer(serverOptions);
}

init();