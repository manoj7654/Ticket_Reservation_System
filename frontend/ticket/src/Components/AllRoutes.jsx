import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
