const express=require("express")
const { book } = require("../controller/ticket.controller")
const tickeRouter=express.Router()


tickeRouter.post("/book/:movieId",book)

// tickeRouter.get("/allTheater",getTheater)
// tickeRouter.get("/oneTheater/:theaterId",getOneTheater)

module.exports={tickeRouter}