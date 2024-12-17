const { getProduct, addProduct, updateProduct, deleteProduct, fetchAdminOrders, adminUpdateOrderStatus, adminUserFetch, adminBlocUnblockUser } = require("../controllers/admin.controller")

const router =require("express").Router()

router
 .get("/product",getProduct)
 .post("/product/add",addProduct)
 .put("/product/update/:productId",updateProduct)
 .delete("/product/delete/:productId",deleteProduct)
 .get("/orders",fetchAdminOrders)
 .put("/order/update/:oid",adminUpdateOrderStatus)
 .get("/user/fetch",adminUserFetch)
 .put("/user/block/:uid",adminBlocUnblockUser)
 module.exports=router