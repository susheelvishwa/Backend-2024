const express = require("express");
const fs = require("fs");

const server = express();
const PORT = 3005;

server.use(express.json());

server.get("/home", (req, res) => {
  res.send("welcome to home page");
});

server.get("/about", (req, res) => {
  res.send("welcome to about page");
});

server.get("/user-data", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf-8");
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading user data");
  }
});

server.post("/add-data", (req, res) => {
  const incomingData = req.body;
  console.log("incomingData", incomingData);

  let userData;
  try {
    userData = fs.readFileSync("./db.json", "utf-8");
  } catch (error) {
    // If file does not exist or is empty, initialize with an empty object
    userData = '{"data": []}';
  }

  let parseData;
  try {
    parseData = JSON.parse(userData);
    // Ensure parseData has a data array
    if (!Array.isArray(parseData.data)) {
      parseData.data = [];
    }
  } catch (error) {
    parseData = { data: [] };
  }

  console.log("parseData", parseData);

  parseData.data.push(incomingData); // parsed data old data and new data
  console.log("old+newdata", parseData);

  fs.writeFileSync("./db.json", JSON.stringify(parseData));

  res.send(`data received successfully ${JSON.stringify(incomingData)}`);
});

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
