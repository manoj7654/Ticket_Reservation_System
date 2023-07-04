const express=require("express")
const movieRouter=express.Router()
const { addMovie, getMovie, getOneMovie } = require("../controller/movie.controller")
const { authenticate } = require("../middleware/authentication")


movieRouter.post("/add/:theaterId",authenticate,addMovie)

movieRouter.get("/allMovie",getMovie)

movieRouter.get("/OneMovie/:movieId",getOneMovie)

module.exports={movieRouter}