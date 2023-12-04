import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Submitdata, registerUsers } from "../slice/registeruserSlice";
import { Link } from "react-router-dom";

export function Register(){
//debugger;
const [Username,setName] = useState('');
const [email,setEmail] = useState('');
const [password1,setPassword] = useState('');
const [password2,setConfirmPassword] = useState('');

   /* console.log('username:',Username)
    console.log('email:',email)
    console.log('password1:',password)
    console.log('password2:',confirmPassword)*/

    const Userdata = useSelector((state) => state.userRegister?.data || [{}]);
   console.log('userData:',Userdata);

    const dispatch = useDispatch();

    const handleRegister = async (e) => {
     //  debugger;
        e.preventDefault();
        dispatch(Submitdata())
        try{
            if(Username === '' || email === '' || password1 === '' || password2 === '' ){
              alert('please Fill blank fields')
            }
           
          }
        catch{
              if(Username !== Username || email !== email || password1 !== password2){
                alert('please enter correct Username and password')
              }
            }  
            const data = {
              "username": Username,
              email,
              password1,
              password2
            }  
            dispatch(registerUsers(data))
          }       

    return(
        <>
        <h5>registerUser</h5>
        <div>
            {Userdata.map((item,index)=>
                 <form  key={index} style={{border:'1px solid black' , marginLeft:'30%',marginTop:'10%', width:'50%' ,height:'30%'}}>
                    <label>Username:</label>
                    <input 
                        id="nameId"
                        type="text"
                        placeholder="Username"
                        value={Username}
                        onChange={(e) => setName(e.target.value)}
                    />
                     <label>Email:&#128231;</label>
                     <input 
                        id="mailId"
                        type = "email"
                        placeholder = "Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     /> 
                     
                     <label>Password:&#128274;</label>
                     <input
                     id="passwordId"
                         type = "password"
                         placeholder = "password"
                         value = {password1}
                         onChange={(e) => setPassword(e.target.value)}
                     />
                     <label>Confirm Password:</label>
                     <input
                        id="confirmpasswordId"
                        type="password"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                     
                     
                     <button  type="button" onClick={handleRegister}><Link to='/login'>Register</Link></button>
                </form>
            )}
        </div>
        </>
    )
}