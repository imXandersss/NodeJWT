import {Schema, model} from "mongoose";

interface user{
    username: string;
    email: string;
    password:string;

}

const userSchema= new Schema({
    username:{
        type: String,
        required:true,
        min:4,
        lowcase:true
    },
    email:{
        type: String, 
        unique:true,
        required:true,
        lowcase:true
    },
    password:{
        type:String,
        required:true
    }
})


export default model('User', userSchema);