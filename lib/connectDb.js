import mongoose from "mongoose";

const DataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log(error);
  }
};
