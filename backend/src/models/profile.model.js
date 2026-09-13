import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user' ,
        required : true ,
    }, 
    image : {
        type : String , 
    },
    username : {
        type : String , 
        required : true
    },
    bio : {
        type : String
    }
})
export default  mongoose.model("profile" , profileSchema)
