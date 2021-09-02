const express = require("express")
const app = express()
app.use(express.json())

app.post("/getOTP",(req,res)=>{

    let mobileNumber = req.body.mobileNumber;
    

    res.json({
        message: "OTP SEND"
    })
});

app.post("/verifyOTP",(req,res)=>{
    res.json({
        message: "OTP Verified"
    })
})






app.listen(3000,()=>{
    console.log("server running")
})