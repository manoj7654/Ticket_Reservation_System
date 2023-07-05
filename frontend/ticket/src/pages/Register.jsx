import React, { useState } from 'react'
import {redirect} from "react-router-dom"
import "./register.css"
const Register = (e) => {
const [register,setRegister]=useState({name:"",email:"",password:""})
const handleChange=(e)=>{
  setRegister({...register,[e.target.name]:e.target.value})
}
  const handleSubmit=async(e)=>{
   e.preventDefault()
    try {
       const result=await fetch("https://inquisitive-sundress-foal.cyclic.app/users/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(register)

       })
       const res=await result.json();
       if(result.ok){
        alert(res.message)
        // <redirect to="/login" />
       }else{
        alert(res.message)
       }
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div >
        <h1>Create Account</h1>
        <div className="register">
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Enter name' onChange={handleChange} />
            <input type="text" name="email" id="" placeholder='Enter email' onChange={handleChange} />
            <input type="text" name="password" id="" placeholder='Enter password' onChange={handleChange}  />
            <input type="submit" name="" id="account" value="Create" />
        </form>
        </div>
       
    </div>
  )
}

export default Register