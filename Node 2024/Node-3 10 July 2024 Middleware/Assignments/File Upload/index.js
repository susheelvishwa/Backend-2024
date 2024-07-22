const express = require("express");
const server = express();
const PORT = 8089;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

server.use(express.json());
server.use(express.static("public"));

server.get("/home", (req, res) => {
  res.send("Welcome to home page");
});

server.post("/user", upload.single("avatar"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully.");
});

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
