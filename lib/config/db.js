import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
}

export default ConnectDB;