const express = require("express")
const server = express()
const PORT = 3004

const gatekeeper1 = (req, res, next) => {
  console.log(1);
  next()
  console.log(2);
}

const gatekeeper2 = (req, res, next) => {
  console.log(3);
  next();
  console.log(4);
};

server.use(gatekeeper1, gatekeeper2)

server.get("/school", (req, res) => {
  console.log(5);
  res.send("welcome to my school")
})

server.get("/sonu", (req, res) => {
  console.log(5);
  res.send("hii sonu");
});

server.get("/pillu", (req, res) => {
  console.log(5);
  res.send("hii pillu");
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
