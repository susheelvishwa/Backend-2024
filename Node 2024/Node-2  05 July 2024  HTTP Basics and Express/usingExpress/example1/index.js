const express = require('express');
const server = express()
const PORT = 8084;

server.get("/", (req, res) => {
  res.send("server is running fine")
})


server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})