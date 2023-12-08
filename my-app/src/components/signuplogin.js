import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export function Frontpage () {
    return (
    <> 
            <div style={{border:'1px solid black',borderRadius:'10px', width:'60%' , height:'60vh', marginTop:'5%',marginLeft:'20%', padding:'10px',backgroundColor:'grey'}} >
 
                <button style={{ width:'25%', marginLeft:'5px',marginTop:'10%',padding:'5px',borderRadius:'10px'}}>
                <Link to='/register' style={{margin:'10%'}}>SignUp</Link></button>
                    <h6>If You have no account? <Link to='/register' style={{color:'black', textDecoration:'none'}}>SignUp!</Link></h6>
                <button style={{ width:'25%',marginLeft:'40%',marginTop:'10%',padding:'5px',borderRadius:'10px'}}>
                <Link to='/login' style={{margin:'10%'}}>LogIn</Link></button>
                    <h6>If You have already an account? <Link to='/login' style={{color:'black', textDecoration:'lightpink'}}>Login!</Link></h6>

            </div>    
           
        
       
    </>
    )
}