const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home" && req.method === "GET") {
    //client wants home data and he wants read the data
    res.write("welcome to home page");
    res.end();
  } else if (req.url === "/card") {
    //client wants card data and he wants read the data
    res.write("welcome to card page");
    res.end();
  } else if (req.url === "/about") {
    //client wants about data and he wants read the data
    res.write("welcome to about page");
    res.end();
  } else {
    // if something wrong end point so its showing
    res.write("Something went wrong");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is running in port number 8080");
});
