const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("welcome")
    res.end()
  } else {
    res.write("page not found")
    res.end
  }
})

server.listen(8080, () => {
  console.log("server is running in port number 8080");
})