import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db.js";
import userRouter from "./route/user.route.js";


const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use("/user", userRouter)

app.get("/home", (req, res) => {
  res.send("server is running fine on port 3000")
})

app.listen(PORT, async() => {
  try {
    await connection
    console.log(`server is running on port ${PORT} and db also connect`);
  } catch (error) {
    console.log("error is the server", error);
  }
})


