const mongoose = require("mongoose");
const express = require("express")
const server = express()

const URL = "mongodb://127.0.0.1:27017/SusheelCap01";
const PORT = 8090

server.get("/", (req, res) => {
  res.send("welcome")
})

server.listen(PORT, async () => {
  try {
    await mongoose.connect(URL);
    console.log(`server is running on ${PORT}`);
    console.log("connected to the database");
  } catch (error) {
    console.log(`error connection to the database or server ${3003}`);
  }
})



const { version, type } = require("os");
// 1st part
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: {type:Number, required:true},
}, {
  versionKey : false 
});
// 2nd part
const UserModel = mongoose.model("User", userSchema);

const main = async() => {
  try {
    

    const User = new UserModel({
      name: "ravi",
      email: "susheel@example.com",
      age:10
    });
    await User.save()
    console.log("document created successfully");
    connection.disconnect();
  } catch (error) {
    console.log(`error connecting to the database ${error}`);
  }
};

// main()