import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();

const server = http.createServer(Api);

server.listen(config.serverPort, () => console.log(`Im working. Running at port: ${config.serverPort}.`));