const express = require("express");
const logger = require("./middlewares/logger");
const server = express();
server.use(express.json()); // <-- REMEMBER THIS
server.use(logger); //   - this middleware runs on every request made to the API

const userRouter = require("./users/userRouter.js");
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

module.exports = server;
