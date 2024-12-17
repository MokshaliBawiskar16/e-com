
//registerAdmin
// loginAdmin

const Admin = require("../models/Admin")
const bcrypt =require("bcryptjs")
const jwt =require("jsonwebtoken")
const User = require("../models/User")

// logoutAdmin
exports.registerAdmin=async(req,res)=>{
    const {email,password}=req.body

    const result=await Admin.findOne({email})
    if (result) {
        return res.status(409).json({mesage:"email already register"})
    }
    const hash= await bcrypt.hash(password,10)
    await Admin.create({...req.body,password:hash})
    
    res.json({mesage:"admin register success"})
}

exports.loginAdmin=async(req,res)=>{
    const {email,password}=req.body

    const result=await Admin.findOne({email})
    if (!result) {
        return res.status(401).json({mesage:"invalid credential email"})
    }

    const comparPass= await bcrypt.compare(password,result.password)
    // (123,$2a$10$DeV6N/X7FssN2pdw4I0hbORTqckKgSDnc5iRw6CVUmiAXA9JN6Ahu)
    if (!comparPass) {
        return res.status(409).json({mesage:"invalid credential password"})
    }

    const token=jwt.sign({_id:result._id},process.env.JWT_SECRET,)
    res.cookie("admin",token,
        {maxAge:1000*60*60*24, 
        httpOnly:true,
        //  secure:true
        })
    res.json({mesage:"admin login success",result:
        {       
         _id:result._id,
        name:result.name,
        email:result.email,
    }
    })
}
exports.logoutAdmin=async(req,res)=>{
    res.clearCookie("admin")
    res.json({mesage:"admin logout success"})
}