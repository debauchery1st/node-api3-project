// code away!
const apiServer = require("./server");

const PORT = 4002;

apiServer.listen(PORT, () =>
  console.log(`** listening on port http://127.0.0.1:${PORT} **`)
);
