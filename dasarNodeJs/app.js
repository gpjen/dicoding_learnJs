const http = require("http");

const reqListener = (req, res) => {
  const { method, url } = req;

  if (url === "/") {
    if (method === "GET") {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.end(`<center><h1>HELLO BOYS AND GIRL</h1></center>`);
    } else if (method === "POST") {
      let body = [];
      req.on("data", (val) => body.push(val));
      req.on("end", () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"time\": \"SELAMAT PAGI\"}"
        res.end(`<center><h5> data : ${body.time}</h5></center>`);
      });
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.end(`<center><h1>INI ADALAH HALAMAN ABOUT</h1></center>`);
    } else if (method === "POST") {
      let body = [];
      req.on("data", (val) => body.push(val));
      req.on("end", () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(
          `<center><h1>Hi ${body.name}, INI ADALAH HALAMAN ABOUT</h1></center>`
        );
      });
    }
  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 404;
    res.end(`<center><h1>path ${url} Not found</h1></center>`);
  }
};

const server = http.createServer(reqListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server runing on ${port}`);
});
