const mongoose =require("mongoose")

const userSchema =new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    mobile:{type:String, required: true},
    password:{type:String, required: true},
    isActive:{type:Boolean, default: true},//jb koi new user aainga to by default wo true rahinga
})
module.exports =mongoose.model("user",userSchema)