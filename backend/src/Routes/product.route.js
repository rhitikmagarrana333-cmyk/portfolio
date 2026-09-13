import express from "express"
import productController from "../controller/product.controller.js"
import midllware from "../middleware/midllware.js"
import multer, { memoryStorage } from "multer"

const router = express.Router()
const upload = multer({
    storage : memoryStorage()
})


// create admin product to users
router.post("/createproduct" ,
    midllware.adminMiddleware,
     upload.single("image"),
      productController.createproduct)


// get all products users

router.get("/getallproducts" ,productController.getallproducts)

     router.post("/deleteproduct" ,midllware.adminMiddleware,
     productController.deleteproduct)

     router.post("/updateproduct" ,midllware.adminMiddleware,
     productController.updateproduct)
export default router