import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function Submit() {
    let userData = {
      email,
      password
    }
    localStorage.setItem("userData", JSON.stringify(userData))
  }

  return (
    <div className='container login-page'>
      <form className='form'>
        <h1>Login </h1>
        <hr />
        <label>Email:</label>
        <input className='login-input' type='email' placeholder='Enter your email' id='email' onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className='login-input' type='password' placeholder='Enter your password' id='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='submit' onClick={Submit} type='button'>Submit</button>
      </form>
    </div>
  )
}

export default Login
