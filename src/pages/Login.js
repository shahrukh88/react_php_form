import axios from 'axios';  
import {
    useNavigate 
  } from "react-router-dom";

import React, { useState } from 'react'  


const Login=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({email:'',password:''})

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value}); 
    }


    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
        
            email:user.email,
            password:user.password

        }

       // console.log(sendData);

        axios.post('http://localhost/devtest/reactjs/login.php/',sendData)
        .then((result)=>{
            if (result.data.Status === '200') { 
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('userName', (result.data.firstName+ ' ' +result.data.lastName ));  
                navigate(`/dashboard`);
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           
           alert('Invalid User'); 
        }
      })  
    }


    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
        <div className="row">
             <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
        </div>
        <div className="row">
           <div className="col-md-6">Email:</div>
           <div className="col-md-6"><input typs="email" name="email"  
           onChange={handleChange} value={user.email} /></div>
        </div>
        <div className="row">
           <div className="col-md-6">Password:</div>
           <div className="col-md-6"><input typs="password" name="password"
            onChange={handleChange} value={user.password}
            /></div>
        </div>


        <div className="row">
           <div className="col-md-12 text-center">
               <input type="submit" name="submit"  className="btn btn-success" value="Plese Login" />
           </div>
           
        </div>
        <div className="row">
           <div className="col-md-12 text-center">
               <input type="submit" name="password-reset-taken"  className="btn btn-success" value="Reset Password" />
           </div>
           
        </div>
 
        </div>
        </form>
    )
}

export default Login;