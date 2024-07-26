const mongoose = require("mongoose");
const { version, type } = require("os");
const URL = "mongodb://127.0.0.1:27017/SusheelCap01";
// 1st part
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: {type:Number, required:true},
}, {
  versionKey : false  // if we don't want to version on database
});
// 2nd part
const UserModel = mongoose.model("User", userSchema);

const main = async() => {
  try {
    const connection = await mongoose.connect(URL);
    // await UserModel.insertMany([
    //   {
    //     name: "Susheel",
    //     email: "susheel@example.com",
    //     age: 22,
    //   },
    //   {
    //     name: "Shivam",
    //     email: "shivam@example.com",
    //     age: 24,
    //   },
    // ]);

    const User = new UserModel({
      name: "Susheel",
      email: "susheel@example.com",
      age:10
    });
    await User.save()
    console.log("connected to the database");
  } catch (error) {
    console.log(`error connecting to the database ${error}`);
  }
};

main()