const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    // custome data type👇
customer:{type:mongoose.Types.ObjectId,
          ref:"user", // user👈 ka hi id lenga sirf it is=>foren key
          required:true//customer ka id rakhna hai
        },
address:{type:String,required:true},
city:{type:String,required:true},
payment:{type:String,required:true},
products:{type:[mongoose.Types.ObjectId],
          ref:"product",
          required:true
         },
status:{type:String,enum:["placed","delivered","cancel"],default:"placed"}   
// enum   =>  me jo value hai wahi lenga dusre nahi lenga
},{timestamps:true})//createdAt & updatedAt =>date n time ki entry k liye mongoose apne aap banata hai
module.exports=mongoose.model("order",orderSchema)