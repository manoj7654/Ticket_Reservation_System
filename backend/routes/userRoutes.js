const express=require("express")
const { register, login } = require("../controller/users.controller")
const userRouter=express.Router()


userRouter.get("/",(req,res)=>{
    res.send("Welcome")
})
userRouter.post("/register",register)

userRouter.post("/login",login)

module.exports={userRouter}