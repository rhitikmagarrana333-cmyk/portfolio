import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId : {
        type : String ,
        ref : "user" ,
        required  : true
    },
    items : [
        {
            productId : {
                type : String , 
                ref : "product"
            },
            price : {
                type : Number,
            },
        }
    ],
    totalAmmount : {
        type : String , 
        required : true
    },
    paymentmethose : {
        type : String, 
        default : "cod"
    },
    status: {
    type: String,
    enum: ["placed", "confirmed", "shipped", "delivered", "cancelled"],
    default: "placed"
},
})

export default mongoose.model("order" , orderSchema)