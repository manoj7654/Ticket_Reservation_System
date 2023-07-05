import React, { useState } from 'react'
import "./login.css"


const Login = () => {
  const [login,setLogin]=useState({email:"",password:""})

  const handleInput=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }

const handleSubmit=async(e)=>{
e.preventDefault()
console.log(login)
 try {
  const result=await fetch("https://inquisitive-sundress-foal.cyclic.app/users/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(login)
  })
  const res=await result.json();
  if(result.ok){
    localStorage.setItem("token",res.token)
    
    alert(res.message)
  }
 } catch (error) {
  console.log(error)
 }


}


  return (
    <div>
          <h1>Login</h1>
        <div className="login">
        <form action=""   onSubmit={handleSubmit} >
            <input type="text" name="email" id="" placeholder='Enter email' onChange={handleInput} />
            <input type="text" name="password" id="" placeholder='Enter password' onChange={handleInput}  />
            <input type="submit" name="" id="account" value="Login" />
        </form>
        </div>
    </div>
  )
}

export default Login