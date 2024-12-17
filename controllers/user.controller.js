// userRegister
// userLogin
// userLogout

const User = require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const { sendEmail } = require("../utils/email")

exports.userRegister=async(req,res)=>{
 try {
    const {email,password}=req.body   
    const result=await User.findOne({email})
    if(result) {
        return res.status(409).json({message:"Email alredy exist "})
    }
    const hash=await bcrypt.hash(password,10)
    await User.create({...req.body,password:hash})
    await sendEmail({to:email,subject:"Welcome to flipcart-light",message:`
        <h1>Welcome, ${req.body.name}</h1>
        <h2>welcome to flipcart thankyou for joining with us .it will be great journy!!!!!</h2>`})
    res.json({message:"user register successfully"})
} catch (error) {
    console.log(error);
    res.json({message:"unable to register customer"})
}
}
exports.userLogin=async(req,res)=>{
    const {email,password}=req.body
    const result =await User.findOne({email})
    if (!result) {
        return res.status(409).json({message:"Email not  register "})
    }
    const comparPassword=bcrypt.compare(password,result.password)
    if (!comparPassword) {
        return res.status(409).json({message:"invalid password"})
    }
     if (!result.isActive) {
        return res.status(401).json({message:"Account Block"})
     }

    const token=jwt.sign({_id:result._id},process.env.JWT_SECRET)
    res.cookie("users",token,
        {maxAge:1000*60*60*24,
            httpOnly:true
        })

        res.json({mesage:"user login success",result:
            {       
             _id:result._id,
            name:result.name,
            email:result.email,
        }
        })
}
exports.userLogout=async(req,res)=>{
    res.clearCookie("users")
    res.json({message:"user lgout successfully"})
}