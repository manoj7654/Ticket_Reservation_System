const { MovieModel } = require("../models/movieModel");
const { TheaterModel } = require("../models/theaterModel");
const { TicketModel } = require("../models/ticketModel");

const book = async (req, res) => {
  const { userId,seatId, theaterId,  seat } = req.body;
  const movieId = req.params.movieId;
  try {
    const theater = await TheaterModel.findOne({ _id: theaterId });
    const movie = await MovieModel.findOne({ _id: movieId });
    let data = {
      MovieName: movie.movieName,
      Price: movie.price,
      location: theater.location,
      "showTime":movie.showTime,
      
      seat:[]

    };
    const availableSeat=movie.availableSeat.find((ele)=>ele._id==seatId);
    // console.log(availableSeat)
    for(let i=0;i<seat.length;i++){
        data.seat[i]=availableSeat.seat.find((ele)=>{
            if(ele.seatNo==seat[i]){
                return true
            }
        })
        data.seat[i].isBooked=true
    }
    const userData=await TicketModel.exists({userId})
    console.log(userData)
    if(!userData){
        const bookTicket = await new TicketModel({userId,bookingDetails:data});
        await bookTicket.save()
    }else{
        await TicketModel.findOneAndUpdate({userId},{$push:{"bookingDetails":data}})
    }
   
    // availableSeat.seat.
    await movie.save()
    res.send(await TicketModel.find({userId}))
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  book,
};
