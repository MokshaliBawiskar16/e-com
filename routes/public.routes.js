const { getPublicProduct, getPublicProductDetail } = require("../controllers/public.controller")

const route=require("express").Router()


route
 .get("/product",getPublicProduct)
 .get("/product-details/:productId",getPublicProductDetail)
 module.exports=route