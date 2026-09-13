
import express from "express"
import profilecontroller from "../controller/profile.controller.js"
import midllware from "../middleware/midllware.js"
import multer, { memoryStorage } from "multer"

const router = express.Router()
const upload = multer({

 storage : multer.memoryStorage()})

router.post("/profile" ,midllware.userMiddleware, upload.single("image"), profilecontroller.createprofile)
 

router.get("/getprofile" , midllware.userMiddleware , profilecontroller.getprofile)
export default router