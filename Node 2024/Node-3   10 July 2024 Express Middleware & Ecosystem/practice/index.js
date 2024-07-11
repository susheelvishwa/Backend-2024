const express = require("express");

const server = express();
const PORT = 8080;

server.use(express.json());

server.get("/school", (req, res) => {
  res.send("welcome to our school");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
