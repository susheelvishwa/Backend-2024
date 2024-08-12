const express = require("express");
const app = express();
const PORT = 3000;

const accessChecker = (req, res, next) => {
  const accessCard = req.query.accessCard;
  if (accessCard === "valid-card") {
    next();
  } else {
    res.send("Access denied: valid access card required");
  }
};

app.get("/office", accessChecker, (req, res) => {
  res.send("Welcome to the office");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
