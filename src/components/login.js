import React, { useEffect, useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  loginSuccess, loginUser } from "../slice/loginSlice";




export const LogIn = () =>{
  const [Username,setName] = useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  console.log('username:',Username)
  console.log('email:',email)
  console.log('password:',password)
  const logUser = useSelector((state) => state.loginUser?.data || [{}])
  console.log(logUser);
  const dispatch = useDispatch();
  
  const Clicklogin = async(e) =>{
    //debugger;
    e.preventDefault();
  try{
     // debugger;
      dispatch(loginSuccess())
      if(Username == '' || email == '' || password == ''){
        alert('please enter blank fields')
      }
      
    }
    catch{
      if(Username !== setName && password !== setPassword){
alert('please enter correct Username and password')
          if (email !== setEmail) {
              console.log('please enter correct email!')
          }  
      }
    }
    const logindata = {
      "username": Username,
      email,
      password,
    }  
    dispatch(loginUser(logindata))
  }           
  
return(
  <>    
<div className="admin-div">
{logUser?.map((item,index) =>
            <form className="form-class" key={index} >
              <label>username :<span>&#128231;</span></label>
                <input 
                id="username"
                  className="input-class"
                  type = "text"
                  placeholder = 'enter your name'
                  name="username"
                  //value={Username}
                  value={item.username}
                  onChange={(e)=> setName(e.target.value)}
                /> 
                
                <br/>
                <br/>
                <label>Email :<span>&#128231;</span></label>
                <input 
                id="usermail"
                  className="input-class"
                  type = "email"
                  placeholder = 'enter your email'
                  name='email'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                /> 
                
                <br/>
                <br/>
                <label>Password :<span>&#128274;</span></label>
                  <input 
                  id="userpassword"
                    className="input-class"
                    type = "password"
                    placeholder = 'enter your password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                  <br/>
                  <br/>
                  <div className="btn-class">
                  <button id="btn-id" type="button" onClick={ Clicklogin} ><Link to='/home'>Log In</Link></button>
                </div>
          </form>
)}
 </div>
 
    </>
    );
}
