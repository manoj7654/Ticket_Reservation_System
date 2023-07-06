import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Movie from '../pages/Movie'
import Seat from '../pages/Seat'
import ShowDetails from './ShowDetails'
import Cart from '../pages/Cart'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='movie/:theaterId' element={<Movie/>}/>
            <Route path='/seats/:movieId/:showId' element={<Seat/>}/>
            <Route path='/show/:movieId' element={<ShowDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}
