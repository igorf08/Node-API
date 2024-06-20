"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var config = require('./config/env/config')();
var server = http.createServer(api_1.default);
server.listen(config.serverPort, function () { return console.log("Im working. Running at port: ".concat(config.serverPort, ".")); });
