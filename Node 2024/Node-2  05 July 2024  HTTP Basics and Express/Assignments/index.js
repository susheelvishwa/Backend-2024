import express from "express"
const app = express()
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server")
})

app.get("/about", (req, res) => {
  res.send("This is a simple web server build using express.js");
});


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
