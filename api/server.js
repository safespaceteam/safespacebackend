const express = require("express");

const configureMiddleware = require("../config/middleware.js");


const authRoute = require('../auth/authRoute.js');

const server = express();

configureMiddleware(server);

// sanity check
server.get("/", (req, res) => {
    res.json({ message: "👋🌎🌍🌏, root dir sanity check" });
  });

server.use('/', authRoute);

module.exports = server;

