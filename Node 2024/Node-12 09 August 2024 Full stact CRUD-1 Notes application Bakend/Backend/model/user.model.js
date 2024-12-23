import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  age: { type: Number, required: true },
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
