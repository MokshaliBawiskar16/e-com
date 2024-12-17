const jwt=require("jsonwebtoken")
const User = require("../models/User")

exports.userProtected=async(req,res,next)=>{
const users=req.cookies.users
  if (!users) {
      return res.json({message:"no cookie found"})
  }
//                                                  👇JWT k saath jo id bheji jo kuch bheja wo isme aainga decode me
 jwt.verify(users,process.env.JWT_SECRET,async(err,decode)=>{
    if (err) {
        console.log(err);
        return res.status(401).json({message:"invalid token"})
    }
    const result=await User.findById(decode._id)
    if (!result.isActive) {
        return res.status(401).json({message:"account block by admin"})
    }
    // console.log(decode)
    req.loggedInUser = decode._id
    // 👆jo login huwa uski key aainge isme
    next()
 })
}