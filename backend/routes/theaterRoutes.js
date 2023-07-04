const express=require("express")
const theaterRouter=express.Router()
const {  addTheater, getTheater, getOneTheater } = require("../controller/theater.controller")


theaterRouter.post("/add",addTheater)

theaterRouter.get("/allTheater",getTheater)
theaterRouter.get("/oneTheater/:theaterId",getOneTheater)

module.exports={theaterRouter}