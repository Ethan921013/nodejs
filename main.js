// @ts-check typescript checking

// formatting -> prettier
// Linting -> ESLint

const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`server port.${PORT}`);
});
