const express = require("express");
const server = express();
const fs = require("fs")

const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  const content = `\n The method is ${req.method} and the api endpoint id ${req.url}
                        and the time is ${Date()}`
  fs.appendFileSync("./request_log.txt", content)
  next();
};

server.use(loggerMiddleware);  
//  This will apply to all routes

server.post("/home", (req, res) => {
  res.send("welcome to home page");
});

server.get("/about", (req, res) => {
  // Route with middleware
  res.send("welcome to about page");
});

server.get("/contact", (req, res) => {
  res.send("welcome to contact page");
});

server.get("/login", (req, res) => {
  res.send("welcome to login page");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
