import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  registerUsers } from "../slice/registeruserSlice";
import { Link, useNavigate } from "react-router-dom";

export function Register(){
//debugger;
const navigation = useNavigate()
const [username,setUsername] = useState('');
const [email,setEmail] = useState('');
const [password1,setPassword] = useState('');
const [password2,setConfirmPassword] = useState('');
const [message,setMessage] = useState('')
const [error,setError] = useState('')
const [usernameError,setusernameError]  =useState('')
const [emailError,setemailError] = useState('');
const [password1Error,setPassword1Error] = useState('')
const [password2Error,setPassword2Error] = useState('')
const [isFormDisabled,setFormDisabled] = useState(true)

   

    const Userdata = useSelector((state) => state.userRegister?.data || [{}]); 
    const dispatch = useDispatch();

    const handleRegister = async (e) =>{ 
        e.preventDefault();
       
      //  dispatch(Submitdata())
       
            const data = {
              "username": username,
              email,
              password1,
              password2
            }  
           
            dispatch(registerUsers(data))
           
          }    
    const handleChangeUsername = (e) =>{
      setUsername(e.target.value)
       setFormDisabled(!e.target.value || !email || !password1 || !password2)
   }
   const handleChangeEmail = (e) =>{
      setEmail(e.target.value) 
      setFormDisabled(!username || !e.target.value || !password1 || !password2)  
   }
   const handleChangePassword1 = (e) =>{
           setPassword(e.target.value)
           setFormDisabled(!username || !email || !e.target.value || !password2)
       } 
   const handleChangePassword2 = (e) =>{
           setConfirmPassword( e.target.value)
           setFormDisabled(!username || !email || !password1 || !e.target.value )
    }

    const handleCheckemail = () =>{
     // debugger;
       let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
       if(!email){
           setemailError('This field is required.')
       }
       else if(!emailRegex.test(email)){
           setemailError('this is not valid email address')
       }
       else {
           setemailError('')
       }
   }
    const handleCheckpassword = () =>{
      // debugger
      
   let passwordRegex =    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
       if(!password1){
           setPassword1Error('This field is required')
       }
       else if(!passwordRegex.test(password1)){
           setPassword1Error('Password length should be minimum 8.One uppercase,One lowercase,special characters or one digit must be included.')
       }
      
       else{
           setPassword1Error('')
       }
       }
   const handleCheckConfirmpassword = () =>{
      // debugger;
           if( !password2){
               setPassword2Error('This Field may not be blank')
           }
           else if(password1 !== password2){
               setPassword2Error('Password did not match.')
           }
           else{
               setPassword2Error('')
           }
          }
         /* if(username && email && password1 && password2 ){
            debugger
            setMessage('User Successfully registered.')
            navigation('/home')
          }*/
    return(
        <>
        <h5>registerUser</h5>
        <div>
            {Userdata.map((item,index)=>
                 <form  key={index} style={{border:'1px solid black',borderRadius:'10px' , marginLeft:'30%',marginTop:'10%', width:'50%' ,height:'30%',padding:'20px'}}>
                    <label>Username:</label>
                    <input 
                        id="nameId"
                        type="text"
                        placeholder="  Enter Username"
                        value={username}
                        onChange={handleChangeUsername}
                        required
                    />
                    {usernameError && <p style={{color:'red'}}>{usernameError}</p>}
                     <label>Email:&#128231;</label>
                     <input 
                        id="mailId"
                        type = "email"
                        placeholder = "  Enter Your Email"
                        value={email}
                        onChange={handleChangeEmail}
                        onBlur={handleCheckemail}
                        required
                     /> 
                     {emailError && <p style={{color:'red'}}>{emailError}</p>}
                     <label>Password:&#128274;</label>
                     <input
                     id="passwordId"
                         type = "password"
                         placeholder = "  Enter Your Password"
                         value = {password1}
                         onChange={handleChangePassword1}
                         onBlur={handleCheckpassword}
                         required
                     />
                     {password1Error && <p style={{color:'red'}}>{password1Error}</p>}
                     <label>Confirm Password:</label>
                     <input
                        id="confirmpasswordId"
                        type="password"
                        placeholder="  Confirm Password"
                        value={password2}
                        onChange={handleChangePassword2}
                        onBlur={handleCheckConfirmpassword}
                        required
                     />
                     {password2Error && <p style={{color:'red'}}>{password2Error}</p>}
                     <button  type="button" onClick={handleRegister} disabled={isFormDisabled} style={{width:'40%' , marginLeft:'40%', padding:'2px', marginTop:'5%', borderRadius:'10px' , height :'50px', backgroundColor:'lightblue'}}>Register</button>
                      {error && <p style={{color:'red'}}>{error}</p>}
                     {message && <p style={{color:'blue'}}>{message}</p>}
                </form>
            )}
             <p>If you already SignUp.?<Link to='/login' style={{textDecoration:'none'}}>login</Link></p>
        </div>
        </>
    )
}