import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "./models/userModel"; 

const userRouter = express.Router();

// Registration Route
userRouter.post("/register", async (req, res) => {
  const { name, email, password, gender, age } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      gender,
      age,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error while registering user: ${error.message}` });
  }
});

// Login Route
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal server error: ${error.message}` });
  }
});

export default userRouter;
