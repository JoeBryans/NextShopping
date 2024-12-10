import mongoose from "mongoose";
// interface URL{
//   MONGO_URL:string
// }
const MONGO_URL ="mongodb://localhost:27017/Nestify"
if (!MONGO_URL) {
  throw new Error("Please define the MONGO_URL environment variable");
} 
 async function connectDb() {
  try {
    const opt={
      bufferCommands:false,
      useUnifiedTopology: true,
      family: 4,
    };
    await mongoose.connect(MONGO_URL, opt);
    
    console.log("DataBase connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;