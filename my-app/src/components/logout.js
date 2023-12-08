import React from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../slice/logoutSlice";

export function LogOut () {
  const  dispatch = useDispatch()
    const handleLogout = (logout) =>{
        dispatch(userLogout(logout))
    }
    return(
        <>
        <button type="button" onClick={handleLogout}>logout</button>
        </>
    )
}