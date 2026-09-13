import cartModel from "../models/cart.model.js";
import orderModel from "../models/order.model.js";
import productModel from "../models/product.model.js";

const createorder = async (req, res) => {
    try {
        const userId = req.user.userId;

        const cart = await cartModel
            .findOne({ userId })
            .populate("items.productId");

        // Check cart
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        // Prepare order items
        const orderItems = cart.items.map((item) => ({
            productId: item.productId._id,
            price: item.productId.price,
            quantity: item.quantity
        }));

        // Calculate total
        const totalAmmount = orderItems.reduce(
            (total, item) =>
                total + (item.quantity * item.price),
            0
        );

        // Reduce product stock
        for (let item of cart.items) {
            await productModel.findByIdAndUpdate(
                item.productId._id,
                {
                    $inc: {
                        stock: -item.quantity
                    }
                }
            );
        }

        // Create order
        const order = await orderModel.create({
            userId,
            totalAmmount,
            items: orderItems,
            paymentMethod: "cod"
        });

        // Clear cart
        await cartModel.findOneAndUpdate(
            { userId },
            { items: [] }
        );

        return res.status(201).json({
            message: "Order created",
            order
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
};



export default {
    createorder
};