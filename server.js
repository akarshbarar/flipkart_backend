const express = require("express")
const Firebase = require("firebase");
const app = express()
app.use(express.json())
var admin = require("firebase-admin");

var serviceAccount = require("./secretKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

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