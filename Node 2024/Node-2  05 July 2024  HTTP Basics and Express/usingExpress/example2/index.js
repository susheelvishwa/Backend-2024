import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running fine");
});

app.listen(PORT, (err) => {
  console.log(`server is running on ${PORT}`);
});
