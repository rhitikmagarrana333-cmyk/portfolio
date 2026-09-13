
import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true ,
        minlength : [3 , "username at least min 3"]
    },

    password : {
        type : String, 
        required : true ,
        minlength : [4 , 'password is atleast 3'],
        select : false
    },
    email : {
        type : String ,
        required : true , 
        unique : true,
    },
    role : {
        type : String, 
        enum : ["user" , "admin"],
        default : "user"
    }
})



userSchema.pre("save" , async function() {
 if(!this.isModified("password")){
    return
 }

 this.password = await bcrypt.hash(this.password , 10)
    

})

userSchema.methods.comparePassword = async function(password) {

    return await bcrypt.compare(password , this.password);
    
}

export default mongoose.model('user', userSchema)