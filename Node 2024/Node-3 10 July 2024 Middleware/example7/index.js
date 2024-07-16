const express = require("express");
const server = express();
const fs = require("fs");
const validator = require("./meddleware/validetor");

server.use(express.json());

const PORT = 8080;

server.get("/showData", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.json({ message: "here is users data", data: data });
});

server.post("/storeData",validator, (req, res) => {
  console.log(req.body);
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  data.users.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.json({ message: "signup successful" });
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
