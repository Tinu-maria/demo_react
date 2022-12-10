import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    // let navigate = useNavigate();
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login=(event)=>{
      event.preventDefault(); 

      axios.post("http://127.0.0.1:8000/api/user/register",{
        username, email, password
      })
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  
  return (  
  <div className="container">
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">

        <h2>Login Here</h2>
            <form action="">
              Username : 
              <input className='form-control' type="text" value={username} onChange={(event)=> setName(event.target.value)}/>
              Email : 
              <input className='form-control' type="text" value={email} onChange={(event)=> setEmail(event.target.value)}/>
              Password : 
              <input className='form-control' type="text" value={password} onChange={(event)=> setPassword(event.target.value)}/>
              <button onClick={login} className='btn btn-info mt-3'>Login</button>
            </form>
      </div>
      <div className="col-4"></div>
    </div>
  </div>
  );

}
export default Login;

