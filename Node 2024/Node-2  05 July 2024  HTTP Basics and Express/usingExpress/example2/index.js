const express = require('express');
const server = express()
const PORT = 8084;

server.get("/susheel", (req, res) => {
  res.send("Welcome susheel")
})

server.get("/pillu", (req, res) => {
  res.send("welcome pillu")
})

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})