const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/User");
const { sendEmail } = require("../utils/email");

exports.placeOrder=async(req,res)=>{
    try {
       const orderData= await Order.create({
            customer: req.loggedInUser,
            address:req.body.address,
            city:req.body.city,
            products:req.body.products,
            payment:req.body.payment,
        })
        const result= await User.findById(req.loggedInUser)
        const allProducts= await Product.find({_id:{$in: req.body.products}})

        const subTotal= allProducts.reduce((sum,item)=>sum+ item.price,0)
        const tax= 18 * subTotal /100
        // const shipping= allProducts.length < 3 ?allProducts.length*50 : 150
        const shipping= 100
        const total= subTotal + tax +shipping

        await sendEmail({to:result.email,subject:"your order placed.",message:`
            <h1>
            Dear ${result.name},
            </h1>

<p>Thank you for shopping with us! We're excited to let you know that your order has been successfully placed. Here's a summary of your order details:</p>

<p>Order Number: ${orderData._id}</p>
<p>Order Date: ${new Date()}</p>
<p>Items Ordered:</p>

${allProducts.map(i => `<p>${i.name} X ${i.price}</p>`)}
<p>
Total Amount: <strong>₹${total}</strong>
</p>

<p>
You can expect your order to be delivered by [Delivery Date]. We’ll send you another email with tracking information as soon as your order is shipped.
</p>
<p>
If you have any questions or need assistance, feel free to contact us at [Customer Support Email] or call [Customer Support Number].
</p>
<p>
Thank you for choosing [Your Company Name]. We hope to serve you again soon!
</p>
<p>
Warm regards,
</p>
`})
        res.json({message:"order place successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"unable to place order"})
    }
}
exports.fetchCustomerOrders = async (req, res) => {
    try {
        // console.log(req.loggedInUser);
        const total=await Order.countDocuments()
        const {skip,limit}=req.query
        const result = await Order
            .find({ customer: req.loggedInUser })
            .skip(skip)
            .limit(limit)
            .populate("customer", "_id name")
            .populate("products", "-qty -__V")
        res.json({ message: "order fetch success", result,total })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to place order" })
    }
}