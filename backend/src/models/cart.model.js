import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,   
    ref: "user",
    required: true,
  },
    items : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'product'
            },
            quantity : {
                type : Number , 
                default : 1
            },
            image : {
                type : String ,
            },
            price : {
                type : String
            },
            totalamount : {
                type : Number
            }
        }]

    })

    export default mongoose.model("cart" , cartSchema)