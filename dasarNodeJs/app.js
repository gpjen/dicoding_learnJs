const http = require("http");

const reqListener = (req, res) => {
  res.setHeader("Content-Type", "text-html");
  res.statusCode = 200;

  const { method } = req;

  if (method == "GET") {
    res.end("<h1> GET : Hallo server!</h1>");
  } else if (method == "POST") {
    res.end("<h1> POST : Hallo server!</h1>");
  } else if (method == "PATCH") {
    res.end("<h1> PATCH : Hallo server!</h1>");
  } else if (method == "DELETE") {
    res.end("<h1> DELETE : Hallo server!</h1>");
  } else {
    res.end(`<h1> WAKWAAAAAW </h1>`);
  }
};

const server = http.createServer(reqListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server runing on ${port}`);
});
