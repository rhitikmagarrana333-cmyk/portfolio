import cartModel from "../models/cart.model.js";
import orderModel from "../models/order.model.js";
import productModel from "../models/product.model.js"

//create cart
const createcart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let cart = await cartModel.findOne({ userId });

    // Cart छैन भने
    if (!cart) {
      cart = await cartModel.create({
        userId,
        items: [
          {
            productId,
            quantity: 1,
            image: product.image,
            price: product.price,
           
          },
        ],
      });

      return res.status(201).json({
        message: "Cart created successfully",
        cart,
      });
    }

    // Cart छ भने
    const item = cart.items.find(
      (item) =>
        item.productId.toString() === productId.toString()
    );

    if (item) {
      item.quantity += 1;
     
    } else {
      cart.items.push({
        productId,
        quantity: 1,
        image: product.image,
        price: product.price,
      });
    }

    await cart.save();

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });

  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
//getall cart

const getcart = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cart = await cartModel
      .findOne({ userId })
   

    res.status(200).json({
      message: "cart fetch successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const deletecart = async(req, res) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;

    const cart = await cartModel.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    const item = cart.items.find(
      (i) => i.productId.toString() === productId.toString()
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    cart.items = cart.items.filter(
      (i) => i.productId.toString() !== productId.toString()
    );

    await cart.save();

    res.status(200).json({
      message: "Cart updated successfully",
      cart,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};


const getAmount = async (req, res) => {
  try {
    const userId = req.user.userId;

    const cart = await cartModel
      .findOne({ userId })
      .populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(404).json({
        message: "Cart not found or cart is empty"
      });
    }

    const orderItems = cart.items.map((item) => ({
      productId: item.productId._id,
      price: item.productId.price,
      quantity: item.quantity
    }));

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return res.status(200).json({
      message: "Total amount calculated successfully",
      totalAmount
    });

  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err.message
    });
  }
};


const editcart = async(req , res) => {
  try {
const {quantity , productId} = req.body
const userId = req.user.userId
const cart = await cartModel.findOne({userId})
if(!cart){
  return res.status(401).json({
    message : "cart is not found or cart is empty" })}

    const item = cart.items.find((i) => 
      i.productId.toString() === productId.toString())

    if(!item){
return res.status(409).json({
  message : "not found same items"
})
    }

    item.quantity = quantity
    await cart.save()
    res.status(200).json({
      message : "cart is updated" , 
      cart
    })
  }catch(err){
    return res.status(500).json({
      message : "internal server err" ,
      error : err.message
    })
  }
}
export default {
  createcart,getcart , deletecart , getAmount , editcart
};