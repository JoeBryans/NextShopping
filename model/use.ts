// import { Model, Schema } from "mongoose";
import mongoose,{Document,Schema,Model} from 'mongoose';
interface user extends Document{
    name:string,
    email:string,
    password:string,    
    phone:string
    id:string
}
const userSchema:Schema<user> = new mongoose.Schema({    
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true

}

},{timestamps:true});

const User:Model<user> =mongoose.models.user|| mongoose.model<user>('user',userSchema);

export default User;