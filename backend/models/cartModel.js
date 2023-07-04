const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({

},{
    versionKey:false
})

const CartModel=mongoose.model("movies",cartSchema)


module.exports={
    CartModel
}