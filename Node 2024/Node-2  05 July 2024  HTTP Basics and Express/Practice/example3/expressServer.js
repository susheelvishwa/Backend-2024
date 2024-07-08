const express = require("express");
const server = express();
const PORT = 3005;

// Middleware to parse JSON bodies
server.use(express.json());

server.get("/home", (req, res) => {
  res.send("welcome to home page");
});

server.get("/about", (req, res) => {
  res.send("welcome to about page");
});

server.post("/add-data", (req, res) => {
  let data = req.body;
  console.log(data);
  res.send(`data added successfully ${JSON.stringify(data)}`);
});

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
