import userMoodel from "../models/user.moodel.js";
import jwt from "jsonwebtoken"



/* 
// user register
//api auth register
*/
const userregister = async(req , res) => {
    try{

const { password, username, role = "user" } = req.body
const email = req.body.email?.trim().toLowerCase()

const existuser = await userMoodel.findOne({email});
if(existuser){
    return res.status(401).json({
        message: "eamil is already exists"
    })
}

const user = await userMoodel.create({
    email,password ,username , role
})


return res.status(201).json({
    message : 'user create succesfully',
    user : {
        email : user.email,
        username : user.username,
        userId : user._id,
        role : user.role
    }
})



    }catch(err){
        return res.status(500).json({
            message : "internal server error",
            err : err.message
        })
    }
}

/* 
// userlogin
//api auth login
*/
const userlogin = async(req, res) => {

    const { password , email} = req.body
   

try {



    const user  = await userMoodel.findOne({email}).select("+password")

    if(!user){
        return res.status(401).json({
            message : 'Invalid email or password'
        })
    }


    const passwordcheck = await user.comparePassword(password)



    if(!passwordcheck){
        return res.status(401).json({
            message : "Invalid email or password"
        })
    }


    const token = jwt.sign({userId : user._id , role : user.role} , process.env.JWT_SECRET, {
        expiresIn : "5d"
    })

    res.cookie("token" , token)


res.status(200).json({
        message : "login succcessfully",
        user : {
            email : user.email,
            userId : user._id, 
            username : user.username,
            role: user.role
        }
    })





}catch(err){
    return res.status(500).json({
        message : 'internal servr err', 
        err
    })
}





}


const getalluser = async(req , res) => {


    try{
const user = await userMoodel.find({}

)

res.status(200).json({
    message : "user fetch succesfully",
    user
})




    }catch(err){
        return res.status(500).json({
            message : "internal server err",
            err
        })
    }
}


//logout 

const logout = async(req, res) => {
    try{
const token = req.cookies.token
if(!token){
    return res.status(401).json({
        message : " please login firts"
    })
}
res.clearCookie("token" )
res.status(200).json({
    message : 'logout succesfully' 
})
    }catch(err){
        return res.status(500).json({
            message :"internal server eerr" , 
            error : err.message
        })
    }
}

export default {
    userregister , userlogin , getalluser , logout
}