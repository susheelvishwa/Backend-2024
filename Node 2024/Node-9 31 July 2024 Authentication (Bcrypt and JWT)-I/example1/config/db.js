import mongoose from "mongoose";
const connection = await mongoose.connect(process.env.MongoDB_URL)

export default connection