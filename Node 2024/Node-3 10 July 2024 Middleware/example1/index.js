const express = require("express")
const server = express()
const PORT = 3003

const gatekeeper = (req, res, next) => {
  const idCard = true;
  if (idCard) {
    next()
  } else {
    res.send("need to id card")
  }
}

// server.use(gatekeeper)

// server.get("/school", (req, res) => {
//   res.send("welcome to my school")
// })

// we can use like this

server.get("/school",gatekeeper, (req, res) => {
  res.send("welcome to my school");
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
