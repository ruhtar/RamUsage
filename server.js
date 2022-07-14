const express = require("express");
const server = express();
const port = 4000 || process.env.PORT;
const stats = require("./pcRamUsage.js"); //Boa prática usar a extensão

server.get("/", (req, res) => {
  res.send("<h1>Seja bem vindo<h1/>");
});

server.get("/stats", (req, res) => {
  res.send(JSON.stringify(stats, null, 2));
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:4000/, ${stats}`);
});
