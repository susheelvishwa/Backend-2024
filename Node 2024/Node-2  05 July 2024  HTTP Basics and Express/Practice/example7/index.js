const http = require("http");
const fs = require("fs");
const PORT = 8086;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    let data = fs.readdirSync("./", "utf-8");
    console.log(data);

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    data.forEach((el) => {
      res.write(`<a href="${el}">${el}</a><br>`);
    });
    res.end();
  } else if (req.url != "/favicon.ico") {
    let data = fs.readFileSync(`.${req.url}`, "utf-8");
    res.end(data);
  }
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

