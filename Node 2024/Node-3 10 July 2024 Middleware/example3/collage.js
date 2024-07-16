const express = require("express")
const server = express()
const PORT = 8087

const collagee = (req, res, next) => {
  const flag = true;
  if (flag) {
    next()
  } else {
    res.send("jhjs")
  }
}
// server.use(collagee);

server.get("/collage",collagee, (req, res) => {
  res.send("Welcome to collage")
})

server.get("/school",collagee, (req, res) => {
  res.send("Welcome to school");
});

server.listen(PORT, () => {
  console.log(`server is running on Port Number ${PORT}`);
})