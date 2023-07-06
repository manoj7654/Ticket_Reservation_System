import React, { useEffect, useState } from "react";
import "./seat.css";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
const Seat = () => {
  const { movieId, showId } = useParams();
  const [detail, setDetail] = useState([]);
  const [seatId,setSeatId]=useState(null)
  const [seatParams,setSeatParams]=useSearchParams()
  const [theaterId,setTheaterId]=useState(null)
  const [seat,setSeat]=useState([])
  async function getData(movieId, showId) {
    try {
      const seat = await fetch(
        `https://sparkling-erin-gilet.cyclic.app/movie/OneMovie/${movieId}/${showId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      const result = await seat.json();
      console.log(result)
      setSeatId(result._id)
      setDetail(result.seat);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(detail);

  async function addCart(movieId,seatId,theaterId,seat){
    try {
      const cart=await fetch(`https://sparkling-erin-gilet.cyclic.app/cart/add/${movieId}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:localStorage.getItem("token")
        },
        body:JSON.stringify({seatId,theaterId,seat})
      })
      const res=await cart.json();
      console.log(res)
      if(cart.ok){
        alert("Movie added into cart")
      }
    } catch (error) {
      console.log(error)
    }
  }



  // Endpoint:cart/add/:movieId
  // Body:{userId,seatId,theaterId,seat}
  // Params;movieId=req.params.movieId
  

  useEffect(() => {
    getData(movieId, showId);
    setTheaterId(seatParams.get("t"))
  }, [movieId, showId]);

  return (
    <div >
      <button className="add" onClick={()=>{addCart(movieId,seatId,theaterId,seat)}} >Add To Cart</button>
      {/* <button>Buy Now</button> */}
      <div className="seat">
      {detail.map((ele) => {
        return (
          <div style={{
            backgroundColor: ele.isBooked?"red":"green",
            color:"white",cursor:ele.isBooked?"no-drop":"pointer",
            opacity: ele.isBooked? "0.5":"1",
          }}>
            <button
              disabled={ele.isBooked}
              style={{
                width:"100%",
                height:"100%",
                backgroundColor: "transparent",
                color:"white",
                opacity: ele.isBooked? "0.5":"1",
                cursor:ele.isBooked?"no-drop":"pointer",
                border:"none"
                
              }}
              onClick={(e)=>{
               e.target.style.backgroundColor="grey"
               setSeat([...seat,ele.seatNo])
              }}
            >
              <p>{ele.seatNo}</p>
            </button>
            
          </div>
          
        );
      })}
      </div>
     
      
    </div>
  );
};

export default Seat;