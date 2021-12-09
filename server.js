// @ts-check

const { resolveSoa } = require("dns");
const http = require("http");

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
  const postIdRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;

  if (req.url === "/posts" && req.method === "GET") {
    res.statusCode = 200;
    res.end("posts");
  } else if (postIdRegexResult) {
    console.log(postIdRegexResult[1]);
    res.statusCode = 200;
    res.end("posts id");
  } else if (req.url === "/posts" && req.method == "POST") {
    res.statusCode = 200;
    res.end("posts");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
