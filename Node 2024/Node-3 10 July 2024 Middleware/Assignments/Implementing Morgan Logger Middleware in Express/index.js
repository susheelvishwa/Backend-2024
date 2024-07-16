const express = require("express");
const server = express();
const fs = require("fs");

const path = require("path");
const morgan = require("morgan");

const PORT = 3000;

const accessLogStream = fs.createWriteStream(
  path.join("./text.txt"),
  { flags: "a" }
);

server.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :date[web] HTTP/:http-version",
    { stream: accessLogStream }
  )
);

server.get("/home", (req, res) => {
  res.status(200).send("Welcome to the Home Page");
});

server.get("/about", (req, res) => {
  res.status(200).json({ message: "Welcome to the About Page" });
});

server.post("/add-user", (req, res) => {
  res.status(201).json({ message: "User added successfully" });
});

server.put("/user/:id", (req, res) => {
  res
    .status(201)
    .json({ message: `User with ID ${req.params.id} updated successfully` });
});

server.delete("/user/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `User with ID ${req.params.id} deleted successfully` });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
