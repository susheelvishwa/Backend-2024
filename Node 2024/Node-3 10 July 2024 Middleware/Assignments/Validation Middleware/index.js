const express = require("express");
const bodyParser = require("body-parser");
const validationMiddleware = require("./middleware/validation");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/home", validationMiddleware, (req, res) => {
  res.status(200).send("data received");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
