import React, { useEffect, useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  loginSuccess, loginUser } from "../slice/loginSlice";
import { userLogout } from "../slice/logoutSlice";

export const LogIn = () =>{
  const [Username,setName] = useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  

  const logUser = useSelector((state) => state.loginUser?.data || [{}])
   const dispatch = useDispatch();
  
  const handlelogin = async(e) =>{
    e.preventDefault();
    const loggedIn = () =>{
      setName(loggedIn)
    }
  try{
      if(Username === '' || email === '' || password === ''){
        return Error
      }
      dispatch(loginSuccess())
      
      const logindata = {
        username: Username,
        email,
        password,
      };
console.log(Username)
console.log(email)
console.log(password)
      dispatch(loginUser(logindata));
    }
    catch(error){
     alert('Error' + error.message)
    } 
  }        

  const handlelogOut = (logout) =>{
    dispatch(userLogout(logout))
  }
return(
  <>    
<div className="admin-div">

{logUser?.map((item,index) =>
            <form className="form-class" key={index}  >
              <label>username :<span>&#128231;</span></label>
                <input 
                id="username"
                  className="input-class"
                  type = "text"
                  placeholder = 'enter your name'
                  name="username"
                  value={Username}
                  //value={item.username}
                  onChange={(e)=> setName(e.target.value)}
                  required = {true}
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
                  required = {true}
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
                    required = {true}
                  />
                  
                  <br/>
                  <br/>
                  <div className="btn-class">
                  <button id="btn-id" type="submit" onClick={ handlelogin} ><Link  to='/home' style={{textDecoration:'none'}}>Log In</Link></button>
                </div>
                <div className="btn1-class" style={{marginTop:'20%' , }}>
                <button id="btn-id" type="submit" onClick={ handlelogOut}><Link>LogOut</Link></button>
                </div>
          </form>
)}
 </div>
 
    </>
    );
}
