const express = require("express");
const server = express();

server.use(logger); //   - this middleware runs on every request made to the API

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

/*
    - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
  */

function logger(req, res, nxt) {
  const dto = new Date(); // datetime object
  const timestamp = dto.toISOString(); // (ISO format)
  const { url, method } = req;
  console.log(`* 𝝺 @ [${timestamp}] => [${method} ${url}]`);
  nxt();
}

module.exports = server;
