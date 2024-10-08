import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `\nMongo_DB Connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
