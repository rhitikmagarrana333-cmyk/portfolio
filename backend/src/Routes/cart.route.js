import  express from "express"
import cartController from "../controller/cart.controller.js"
import midllware from "../middleware/midllware.js"
import orderConroller from "../controller/order.controller.js"
const router = express.Router()

// create cart
router.post("/createcart" ,midllware.userMiddleware, cartController.createcart)


//get cart

router.get("/getcart" , midllware.userMiddleware , cartController.getcart)

router.post("/deletecart" ,midllware.userMiddleware, cartController.deletecart)

router.post("/createorder" ,midllware.userMiddleware, orderConroller.createorder)
router.get("/getorder" , midllware.userMiddleware ,
     cartController.getAmount)

router.post("/editcart" ,
     midllware.userMiddleware,
      cartController.editcart)

      
      
export default router
