import express from "express"
import userRouter from "./Routes/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import productRouter  from "./Routes/product.route.js"
import cartroute from "./Routes/cart.route.js"
import profileroute from "./Routes/profile.route.js"

const app = express()



app.use(cors({
  origin: "https://portfolio-six-pi-zi8hfehqi0.vercel.app/",
  credentials: true
}));
app.use(express.json())

app.use(cookieParser())


// user login, register, get all users
app.use("/api/auth" , userRouter)

// admin create  product
app.use("/api/product" , productRouter)


// cart controler 
app.use("/api/cart" , cartroute

)
app.use("/api" , profileroute
)




export default app