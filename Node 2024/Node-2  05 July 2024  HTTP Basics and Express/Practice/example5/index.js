const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.json());

const PORT = 8085;

server.get("/school", (req, res) => {
  res.send("welcome to school page");
});

server.post("/submit", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let reqdata = req.body;
  let userExists = data.users.some(
    (el) => el.name === reqdata.name && el.gender === reqdata.gender
  );

  if (userExists) {
    res.send("user already registered");
  } else {
    data.users.push(reqdata);
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
    console.log(data);
    res.send("signup successfully");
  }
});


server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
