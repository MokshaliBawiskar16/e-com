//product CRUD
const path =require("path")
const Product = require("../models/Product")
const { upload}=require("../utils/upload")
const Order = require("../models/Order")
const User = require("../models/User")
const { sendEmail } = require("../utils/email")
const cloudinary = require("cloudinary").v2
cloudinary.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    cloud_name:process.env.CLOUDINARY_CLOUDE_NAME,
})
exports.addProduct=async(req,res)=>{
    upload(req, res, async err => {
        try {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" })
        }
        if (req.files) {

            // const allImages=[]
            // for (const item of req.files) {
            //    const {secure_url}=await(cloudinary.uploader.upload(item.path))
            //    allImages.push(secure_url)
            // } 
            // console.log(allImages);
            

            // promise all👇 uparse ye jaada beter hai
            const allImages=[]
            const heros=[]
            for (const item of req.files) {
               allImages.push(cloudinary.uploader.upload(item.path))
            } 
           const data= await Promise.all(allImages)
           for (const item of data) {
            heros.push(item.secure_url)
               console.log(item.secure_url);
           }
             // promise all end
             await Product.create({...req.body,hero: heros})
             res.json({ message: "product add success" })

        }else{
            return res.status(400).json({ message: "hero image is required" })

        }
    } catch (error) {
            console.log(error)
            res.json({message:"something went wrong"})
    }
       // console.log(req.body);
        // console.log(req.file)//multer.single()
       // console.log(req.files)//multer.array()

    })
}
exports.getProduct=async(req,res)=>{
    const result =await Product.find()

    
    res.json({mesage:"product get success",result})
}
exports.updateProduct=async(req,res)=>{
    /*
     name:""
    hero:["img1","img2","ing3","ing4"]
    step 1 : delete  ,"img2","ing3" cloudinary req.body.remove
    step 2 :uplod new image cloudinary req.files
    step 3 :uplod database findbyIdAndUpdate() hero :["img1","new img","ing4"]

    */

    // upload(req,res,async err=>{
    //     if (err) {
    //         console.log(err);
    //         return res.status(400).json({message:"unable to uplod"})
            
    //     }
    //     // console.log(req.body);
    //     // console.log(req.files);

    //     if (req.body.remove) {
    //         // remove old image
    //         await cloudinary.uploader.destroy(path.basename(req.body.remove))
    //     } 
    //     const heros=[]
    //     if (req.files) {
    //         // uplod new image
    //         const allImages=[]
    //         for (const item of req.files) {
    //             allImages.push(cloudinary.uploader.upload(item.path))
    //         }
    //         const data= await Promise.all(allImages)
    //         for (const item of data) {
    //             heros.push(item.secure_url)
    //         }
    //     }
    //     await Product.findByIdAndUpdate(req.params.productId , { ...req.body, hero: heros})
    //     res.json({mesage:"product update success"})
    // })
    upload(req,res,async err=>{
 try {
      
       
          console.log(req.files);
          
    //    agar new img dalni hai to ye wala uplod honga if
    const allImages=[]
        if (req.files && req.files.length > 0) {  //only data change kela tr files=[] array
                for (const item of req.files) {
                    console.log(item.path)
                    
                   const {secure_url}= await cloudinary.uploader.upload(item.path)
                   allImages.push(secure_url)
                }
                //only uplod new image
        }
        const oldProduct=await Product.findById(req.params.productId)
        // agar remove karne hai to ye wala run honga if
         if (req.body.remove) {
            const result=oldProduct.hero.filter(item=>!req.body.remove.includes(item))
            oldProduct.hero=result
             //image remove
             console.log("image remove");
             if (typeof req.body.remove === "string") {
                 await cloudinary.uploader.destroy(path.basename(req.body.remove,path.extname(req.body.remove)))
                
             } else {
                for (const item of req.body.remove) {
                    
                    await cloudinary.uploader.destroy(path.basename(item,path.extname(item)))
                }
             }
         }
            // ye har baar run honga
        await Product.findByIdAndUpdate(req.params.productId, {...req.body,hero: [...oldProduct.hero,...allImages]})
        res.json({message:"product update succes"})
    } catch (error) {
          console.log(error);
          res.status(400).json({message:"something went wrong"})
            
    }})
}
exports.deleteProduct=async(req,res)=>{
    const result = await Product.findById(req.params.productId)
    //steep 1 cloudinary/aws s3
    for (const item of result.hero) {
        // destroy la 1st hota hai item n 2nd hai jo delete karna hai 
        // path.extname(item) ye retrunnkarta hai ".png" yane EXTENSHION
        await cloudinary.uploader.destroy(path.basename(item,path.extname(item)))
    }
    // step 2 database
    await Product.findByIdAndDelete(req.params.productId)
    res.json({ message: "product delete success" })
}
exports.fetchAdminOrders=async(req,res)=>{
    const total=await Order.countDocuments()
    const {skip,limit}=req.query
    console.log(req.query.skip);
    
    const result=await Order.find()
    .skip(skip)
    .limit(limit)
    .populate("customer","name")
    .populate("products","-__v")
    res.json({message:"order fetch success",result,total})
}
exports.adminUpdateOrderStatus=async(req,res)=>{
    await Order.findByIdAndUpdate(req.params.oid,{status:req.body.status})
   const x= await Order.findById(req.params.oid)
   const result= await User.findById(x.customer)
   if (req.body.status !== "placed") {
   await sendEmail({to:result.email,subject:"our update status has been update",message:`
    Hello ${result.name} your order is ${req.body.status} successfully
    `})
   }
    res.json({message:"order status update success"})
}
exports.adminUserFetch=async(req,res)=>{
    try {
        const total = await User.countDocuments()//kitne users hai table me uska count deta hai
        const {skip,limit}=req.query// pagination ka hai
        const result = await User.find().skip(skip).limit(limit)
        res.json({message:"user fetch success",result,total})
    } catch (error) {
        res.status(400).json({message:"unable to fetch "})
        
    }
}
exports.adminBlocUnblockUser=async(req,res)=>{
    try {
       await User.findByIdAndUpdate(req.params.uid,{isActive:req.body.isActive})
        res.json({message:"user block success",})
    } catch (error) {
        res.status(400).json({message:"unable to block "})
        
    }
}