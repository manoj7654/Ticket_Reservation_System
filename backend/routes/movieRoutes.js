const express=require("express")
const movieRouter=express.Router()
const { addMovie, getMovie, getOneMovie } = require("../controller/movie.controller")


movieRouter.post("/add/:theaterId",addMovie)

movieRouter.get("/allMovie",getMovie)

movieRouter.get("/OneMovie/:movieId",getOneMovie)

module.exports={movieRouter}