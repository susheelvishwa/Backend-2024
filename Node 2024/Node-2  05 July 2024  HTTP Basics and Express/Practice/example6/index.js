const http = require("http");
const fs = require("fs");
const PORT = 8087;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    try {
      let data = fs.readdirSync("./", "utf-8");
      console.log(data);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      data.forEach((el) => {
        let isDirectory = fs.statSync(`./${el}`).isDirectory();
        let icon = isDirectory ? "&#128193;" : "&#128196;";
        res.write(`${icon} <a href="${el}">${el}</a><br>`);
      });
      res.end("</body></html>");
    } catch (err) {
      console.error(err);

      res.writeHead(500, {
        "Content-Type": "text/html",
      });
      res.end("Internal Server Error");
    }
  } else if (req.url != "/favicon.ico") {
    try {
      let filePath = `.${req.url}`;
      if (fs.statSync(filePath).isDirectory()) {
        let data = fs.readdirSync(filePath, "utf-8");
        res.writeHead(200, {
          "Content-Type": "text/html",
        });

        data.forEach((el) => {
          let isDirectory = fs.statSync(`${filePath}/${el}`).isDirectory();
          let icon = isDirectory ? "&#128193;" : "&#128196;";
          res.write(`${icon} <a href="${req.url}/${el}">${el}</a><br>`);
        });
        res.end();
      } else {
        let data = fs.readFileSync(filePath, "utf-8");
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end(data);
      }
    } catch (err) {
      console.error(err);
      res.writeHead(404, {
        "Content-Type": "text/html",
      });
      res.end("File Not Found");
    }
  }
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
