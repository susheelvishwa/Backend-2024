const express = require("express");
const app = express();

// Use the express.json() middleware
app.use(express.json());  //example number 7 is the best understanding about express.json

app.post("/data", (req, res) => {
  // Access the parsed JSON data
  const data = req.body;
  console.log(data);
  res.send(`Received data: ${JSON.stringify(data)}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
