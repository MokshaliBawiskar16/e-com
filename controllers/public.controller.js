const Product = require("../models/Product")

exports.getPublicProduct=async(req,res)=>{
    const result =await Product.find()

    
    res.json({mesage:"product get success",result})
}
exports.getPublicProductDetail=async(req,res)=>{
    const result =await Product.findById(req.params.productId)

    
    res.json({mesage:"product detail fetch success",result})
}