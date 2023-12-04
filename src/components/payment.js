import React from "react";
import './payment.css';
import { Link } from "react-router-dom";

export function Payment () {
    return(
        <>
            <div>
                <h2 style={{textAlign:'center'}}>Choose Your Payment Method!</h2>
                <button style={{width:'20%'}}><Link to='/home'>Go Home</Link></button>
            </div>
        </>
    )
}