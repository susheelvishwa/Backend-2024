const express = require("express");
const server = express();
// server.use(express.json())
const PORT = 8080;

const timeLogger = (req, res, next) => {
  const reqTime = new Date().getTime();
  console.log("request");
  next()
  console.log("response");
  const resTime = new Date().getTime();
  console.log(`the request took ${resTime-reqTime}ms`);
  
};

server.use(timeLogger);

server.post("/collage", (req, res) => {
  console.log("hit the end point");
  res.send("Welcome to collage");
});

server.get("/school",(req, res) => {
  res.send("Welcome to school");
});

server.listen(PORT, () => {
  console.log(`server is running on Port Number ${PORT}`);
});
