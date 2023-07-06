import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./home.css"
const Home = () => {

  const [theater,setTheater]=useState([])

  async function fetchTheater(){
    try {
      const theater=await fetch("https://sparkling-erin-gilet.cyclic.app/theaters/allTheater")
      const result=await theater.json()
      console.log(result)
      setTheater(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTheater()
  },[])
  return (
    <div className='home'>
      {theater.map((ele)=>{
        return(
          <Link  key={ele._id} to={`/movie/${ele._id}`}
          style={{textDecoration:"none"}}
          >
             <div className='theaterCard'>
            <h2>Theater Name:{ele.theaterName}</h2>
            <h2>Location:{ele.location}</h2>
            <h2>TotalSeats:{ele.totalSeats}</h2>
          </div>
          </Link>
       
        )
      })}
    </div>
  )
}

export default Home