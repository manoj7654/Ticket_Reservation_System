
import React, { useEffect, useState } from 'react'
import "./cart.css"
const Cart = () => {
  const [data,setData]=useState([]);

  async function getData(){
    try {
      const result=await fetch("https://sparkling-erin-gilet.cyclic.app/cart/get",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          Authorization:localStorage.getItem("token")
        }
      });
      const res=await result.json();
      console.log(res)
      setData(res.cartDetails)
     
    } catch (error) {
      console.log(error)
    }
  }
  // getData()
  console.log(data)

  const handleDelete=async(Id)=>{
  try {
    const del=await fetch(`https://sparkling-erin-gilet.cyclic.app/cart/remove/${Id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        Authorization:localStorage.getItem("token")
      }
    })
    const result=await del.json();
    if(del.ok){
      alert(result.message)
    }else{
      alert(result.message)
    }
  } catch (error) {
    console.log(error)
  }
  }
const buyTicket=async(movieId,dataId)=>{
    console.log(movieId,dataId);
  const res= await fetch(`https://sparkling-erin-gilet.cyclic.app/bookings/book/${movieId}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:localStorage.getItem("token")
    },
    body:JSON.stringify({dataId})
  })
  await res.json();
  if(res.ok){
    alert("Your movies ticket has been booked")
  }
}
  useEffect(()=>{
    getData()
  },[])
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      width:"80%",
      margin:"auto",
      marginTop:"50px"
    }}
  >
   {data.map((ele)=>{
    return (
      <div style={{
        // border: "1px solid red",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        // border: "1px solid red",
        borderRadius: "10px ",
        paddingBottom:"30px"
      
      }}>
        <h3>Movie Name:{ele.MovieName}</h3>
        <h3>Price:{ele.Price}</h3>
        <h3>Location:{ele.location}</h3>
        <h3>Total Seat:{ele.seat.length}</h3>
         <button  className='buy' onClick={()=>buyTicket(ele.movieId,ele._id)} >Buy Now</button>
        <button onClick={handleDelete} className='del'>Delete</button>
      </div>
    )
   })}
  </div>
  )
}

export default Cart