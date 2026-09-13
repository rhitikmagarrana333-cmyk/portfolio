import productModel from "../models/product.model.js";
import imagekis from "../services/storage.service.js"

//create productmodel.js
//    /api/product/create/product

const createproduct = async(req, res) => {
    try {
        const {
            title,
            description,
            price,
            category,
            stock,
        } = req.body;

        if (
            !title ||
            !description ||
            !price ||
            !category ||
            stock === undefined
        ) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Product image is required",
            });
        }

        const result = await imagekis.fileupload(req.file.buffer.toString("base64"));

        const product = await productModel.create({
            title,
            description,
            price,
            category,
            stock,
            image: result.url,
        });

        return res.status(201).json({
            message: "product create succesfully",
            product,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error creating product",
            error: error.message,
        });
    }
}



const getallproducts = async(req, res) => {

    try {
const product = await productModel.find({}).sort({price : -1})
 res.status(200).json({
            message : "product fetch succesfully",
            product

 })

    }catch(err){
        return res.status(200).json({
            message : "internal server err",
            err
        })
    }

}


const deleteproduct = async(req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findByIdAndDelete(productId);
        return res.status(200).json({
            message : "product deleted succesfully",
            product
        })
    }catch(err){
        return res.status(500).json({
            message : "internal server err",
            err
        })  
    }
}



const updateproduct = async(req, res) => {
    try {
const {productId} = req.body;
const product = await productModel.findByIdAndUpdate(productId, req.body, {new : true});
        return res.status(200).json({
            message : "product updated succesfully",
            product
        })
    }catch(err){
        return res.status(500).json({
            message : "internal server err",
            err
        })  
    }
}
export default {
    createproduct , getallproducts , deleteproduct , updateproduct
}