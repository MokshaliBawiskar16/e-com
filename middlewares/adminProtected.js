const jwt=require("jsonwebtoken")
exports.adminProtected =async(req,res,next)=>{
    // console.log(req);
    
    const admin=req.cookies.admin

    if (!admin) {
        return res.status(401).json({message:"no cookie found"})
    }
 jwt.verify(admin,process.env.JWT_SECRET,(err)=>{
    if (err) {
        console.log(err);
        return res.status(401).jsoon({message:"invalid token"})
    }
    next()
 })
}