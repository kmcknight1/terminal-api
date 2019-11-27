const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(helmet(), express.json(), cors(), morgan("combined"));

server.get("/", (req, res) => {
  res.send("GOSH DANG IT'S WORKINGGGGG!!!!");
});

module.exports = server;
