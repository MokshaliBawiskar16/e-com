const express=require("express")
require("dotenv").config()
const mongoose =require("mongoose")
const path =require("path")

const cors =require("cors")
const cookieParser =require("cookie-parser")
const { adminProtected } = require("./middlewares/adminProtected")
const { userProtected } = require("./middlewares/userProtected")
const app=express()

app.use(express.json()) //req.body me data aane k liye ye responsiable hai BODY PARSER
app.use(cookieParser()) //REQ.COOKIE MADHE cooke anila
app.use(express.static("dist"))//yacha madhe sarwa front-End aala aahe build karila front end backend madhe takla
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true

})) 

app.use("/api/admin",adminProtected, require("./routes/admin.routes"))
app.use("/api/auth", require("./routes/user.routes"))
app.use("/api/auth",require("./routes/auth.routes"))
app.use("/api/public",require("./routes/public.routes"))
app.use("/api/customer",userProtected,require("./routes/customer.routes"))
app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"dist","index.html"))//jar konta route find nhi zala tr front end madhe serch karile
    // res.status(404).json({message:"resource not found"})
})



mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open",()=>{ //connect huwa db ko tabhi code run karinga
    console.log("mongo connected");
    app.listen(process.env.PORT,console.log("server Running"))
})