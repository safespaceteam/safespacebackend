const express = require("express");

const configureMiddleware = require("../config/middleware.js");


const authRoute = require('../auth/authRoute.js');
const messagesRoute = require('../messages/messagesRoute.js');

const server = express();

configureMiddleware(server);

// sanity check
server.get("/", (req, res) => {
    res.json({ message: "👋🌎, root dir sanity check" });
  });

server.use('/', authRoute);
server.use('/', messagesRoute);

module.exports = server;

