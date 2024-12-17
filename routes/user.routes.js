const { userRegister, userLogin, userLogout } = require("../controllers/user.controller")

const router =require("express").Router()

router
 .post("/user/register",userRegister)
 .post("/user/login",userLogin)
 .post("/user/logout",userLogout)

 module.exports=router