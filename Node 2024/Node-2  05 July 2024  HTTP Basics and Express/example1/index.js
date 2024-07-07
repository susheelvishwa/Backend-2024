const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/data" && req.method === "GET") {
    console.log("client requested some kind of data");
    res.end("Data page");
  } else if (req.url === "/home") {
    console.log("client requested home page");
    res.end("home page");
  } else if (req.url === "/about") {
    console.log("client requested about page");
    res.write("this is about page");
    res.end(".........about page");
  } else {
    res.end("404 User not found");
  }
});

server.listen(3000, () => {
  console.log("server is running");
});
