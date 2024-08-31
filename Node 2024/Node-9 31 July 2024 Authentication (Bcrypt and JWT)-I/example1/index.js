import express from "express"
import dotenv from "dotenv";
dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;


server.get("/home", (req, res) => {
  res.send("server is running fine")
})

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})