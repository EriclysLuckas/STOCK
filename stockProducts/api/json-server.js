const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Certifique-se de que o arquivo db.json está na raiz do projeto
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
