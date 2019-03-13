const express = require("express");

const configureMiddleware = require("../config/middleware.js");


const authRoute = require('../auth/authRoute.js');
const messagesRoute = require('../messages/messagesRoute.js');
const twilioRoute = require('../twilio/twilioRouter.js');

const server = express();

configureMiddleware(server);

// sanity check
server.get("/", (req, res) => {
    res.json({ message: "👋🌎, root dir sanity check" });
  });

server.use('/', authRoute);
server.use('/', messagesRoute);
server.use('/', twilioRoute);

module.exports = server;

