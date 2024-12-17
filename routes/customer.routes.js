const { placeOrder, fetchCustomerOrders } = require("../controllers/customer.controller")

const route=require("express").Router()

route.post("/place-order",placeOrder)
.get("/order-history",fetchCustomerOrders)
module.exports=route