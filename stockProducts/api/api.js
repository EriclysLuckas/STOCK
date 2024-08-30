const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Substitua 'db.json' pelo caminho do seu arquivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
