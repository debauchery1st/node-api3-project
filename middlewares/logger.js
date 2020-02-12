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

module.exports = logger;
