import express from "express"
import userController from "../controller/user.controller.js"

const router = express.Router()

//api/auth 
router.post("/register" ,userController.userregister)


//api/auth 
router.post("/login" ,userController.userlogin)


//api/auth /get
router.get("/users" ,userController.getalluser)

router.get("/logout" ,userController.logout)


export default router