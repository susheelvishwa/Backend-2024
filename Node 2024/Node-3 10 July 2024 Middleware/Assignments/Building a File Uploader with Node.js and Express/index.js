const express = require("express")
const server = express()
const PORT = 8084

server.use(express.json());


server.get("/Home", (req, res) => {
  res.json("welcome to home page")
})

server.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
})