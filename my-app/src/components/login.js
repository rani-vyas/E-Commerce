import React, { useEffect, useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  loginSuccess, loginUser } from "../slice/loginSlice";
import { userLogout } from "../slice/logoutSlice";

export const LogIn = () =>{
  const [Username,setuserName] = useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [error,setError] = useState('')
  const [usernameError,setusernameError] = useState('')
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormDisabled,setFormDisabled] = useState(true)

  const logUser = useSelector((state) => state.loginUser?.data || [{}])
  const errors = useSelector((state) => state.loginUser?.error || '')
   const dispatch = useDispatch();
  
  const handlelogin = async(e) =>{
    e.preventDefault();
    debugger
    try{
      const logindata = {
        username: Username,
        email,
        password,
      };
console.log(Username)
console.log(email)
console.log(password)
      dispatch(loginUser(logindata));
    }catch{
      dispatch(loginUser(errors))
     /* if(error.response && error.response.data && error.response.data.username){
        setusernameError(error.response.data.username)
      }
      else{
        setError('')
      }
      if(error.response && error.response.data && error.response.data.email) {
        setEmailError(error.response.data.email)
      }else{
        setError('')
      }
      if(error.response && error.response.data && error.response.data.password){
        setPasswordError(error.response.data.password)
      }
      else{
        setError('')
      }
      if(error.response && error.response.data && error.response.data.non_fields_error){
        setError(error.response.data.non_fields_error)
      }else{
        setError('')
      }*/
    }
    
  }   
const handleChangeUsername = (e) =>{
  setuserName (e.target.value)
  setFormDisabled(!e.target.value || !email || !password)
}
  const handlelogOut = (logout) =>{
    dispatch(userLogout(logout))
  }
  
  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)    
    setFormDisabled(!Username || !e.target.value || !password ) 
    
       
  }
 const handleChangePassword = (e) =>{
         setPassword( e.target.value)
         setFormDisabled(!Username || !email || !e.target.value )
       
     } 

     const handleCheckUsername = () =>{
        if(Username == ''){
            setusernameError('must included username')
        }
        else{
            setusernameError('')
        }
     }
     const handleCheckemail = () =>{
      //  debugger;
        let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        setEmailError("this field may not be blank!")
      }
      else if(!emailRegex.test(email)){
        setEmailError('Enter A Valid Email!')
      }
      else{
        setEmailError('')
      }
    }
     const handleCheckpassword = () =>{
      debugger
    
     if(!password){
        setPasswordError('This field is required.')
    }else
    {
      setPasswordError('')
    }
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
                  onChange={handleChangeUsername}
                  onBlur={handleCheckUsername}
                  required = {true}
                /> 
                {usernameError && <p style={{color:'red'}}>{usernameError}</p>}
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
                  onChange={handleChangeEmail}
                  onBlur={handleCheckemail}
                  required = {true}
                /> 
                {emailError && <p style={{color:'red'}}>{emailError}</p>}
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
                    onChange={handleChangePassword}
                    onBlur={handleCheckpassword}
                    required = {true}
                  />
                  {passwordError && <p style={{color:'red'}}>{passwordError}</p>}
                  <br/>
                  <br/>
                  <div className="btn-class">
                  <button id="btn-id" type="submit" onClick={handlelogin} disabled={isFormDisabled}>Log In</button>
                  {errors && <p style={{color:'red'}}>{errors}</p>}
                </div>
                <div className="btn1-class" style={{marginTop:'20%' , }}>
                <button id="btn-id" type="submit" onClick={(e) => handlelogOut(e)}><Link>LogOut</Link></button>
                </div>
          </form>
)}
 </div>
 
    </>
    );
}
