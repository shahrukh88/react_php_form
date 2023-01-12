import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    let history = useNavigate();
    const [data, setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
       // console.log(data);
    }

    const submitForm=(e)=>{



        e.preventDefault();
      const  senddata = {
            firstName: data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:data.password
           
        }
        
        let formData = new FormData();
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('email', data.email)
        formData.append('password', data.password)
        axios({
         method: 'post',
        url: 'http://localhost/devtest/reactjs/signup.php/',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
        console.log(response)
        
        alert('New User Successfully Added.');  
        history(`/dashboard`);
      })
        .catch(function (response) {
        //handle error
        console.log(response)
        });
    }
  return (

   <div className='main-box'>
        <form onSubmit={submitForm}>
      <div className='row'>
        <div className='col-md-12 text-center'><h1>Register</h1></div>
      </div>
      
      <div className='row'>
         <div className='col-md-6'>First Name</div>
         <div className='col-md-6'>
              <input type="text" name="firstName" className='form-control'
              onChange={handleChange} value={data.firstName}
              />
         </div>
      </div>

      <div className='row'>
         <div className='col-md-6'>Last Name</div>
         <div className='col-md-6'>
              <input type="text" name="lastName"  className='form-control'
               onChange={handleChange} value={data.lastName}/>
         </div>
      </div>

      <div className='row'>
         <div className='col-md-6'>Email</div>
         <div className='col-md-6'>
              <input type="email" name="email"  className='form-control'
               onChange={handleChange} value={data.email}/>
         </div>
      </div>

      <div className='row'>
         <div className='col-md-6'>Password</div>
         <div className='col-md-6'>
              <input type="password" name="password" className='form-control' 
               onChange={handleChange} value={data.password}/>
         </div>

         <div className='row'>
         <div className='col-md-12 text-center'>
              <input type="submit" name="submit" value="Register" className='btn btn-success'/>
         </div>
      </div>
      </div>
      </form>

    </div>
  )
}

export default Register
