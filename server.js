const express = require("express")
const app = express()
app.use(express.json())
// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const { getAuth, signInWithPhoneNumber } =  require("firebase/auth");

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDBGag6B5CnoXg1DdiSBNhA5oFFPlgroV0",

  authDomain: "flipkartcloneapp.firebaseapp.com",

  projectId: "flipkartcloneapp",

  storageBucket: "flipkartcloneapp.appspot.com",

  messagingSenderId: "619526600616",

  appId: "1:619526600616:web:83d06eeaa4f9ee29384f9d"

};


// Initialize Firebase




app.post("/getOTP",(req,res)=>{
    
    let mobileNumber = req.body.mobileNumber;
    const firebase = initializeApp(firebaseConfig);
const phoneNumber = "+919876543210";//NOT valid number
const appVerifier = true;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
        console.log(confirmationResult)
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

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