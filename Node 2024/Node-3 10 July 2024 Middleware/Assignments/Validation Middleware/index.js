const express = require("express");
const server = express();
const fs = require("fs")

const PORT = 3000;
const validationMiddleware = require("./middleware/validation");

server.use(express.json());

server.post("/storeData",validationMiddleware, (req, res) => {
  // console.log(req.body);
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  data.users.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.json({ message: "signup successful" });
});

server.use((req, res) => {
  res.status(404).send("Not Found");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



  