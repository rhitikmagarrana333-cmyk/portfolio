import profileModel from "../models/profile.model.js"
import imagekits  from "../services/storage.service.js"
import usermodel from "../models/user.moodel.js"
const createprofile = async(req, res) => {
    try {
const userId = req.user.userId
const {bio} = req.body
const user = await usermodel.findById(userId)

if(!user){
    return res.status(404).json({
        message : "invalid"
    })
}

const file = req.file
if(!file){
    return res.status(401).json({
        message : 'file not found'
    })
}

const result = await imagekits.fileupload(file.buffer.toString("base64"))

const profile = await profileModel.create({
    bio , image : result.url , userId , username : user.username
})
res.status(201).json({
    message : "profile created" , 
    profile
})
    }catch(err){
        return res.status(500).json({
            message : "internal server err", 
            error : err.message
        })
    }
}

// get profile 
const getprofile = async(req , res) => {

    try {
        const userId = req.user.userId
const profile = await profileModel.find({userId})


if(!profile){
    return res.status(401).json({
        message : 'ivalid'
    })
}
res.status(200).json({
    message : "profile fetch succesfully",
    profile
})



    }catch(err){
        return res.status(500).json({
            message : "internal server err", 
            error : err.message
        })
    }
}


export default {
    createprofile ,getprofile
}