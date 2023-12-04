//import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchOrders } from "../slice/ordersSlice";
import { Link } from "react-router-dom";


export function Orders (){
    const userOrders = useSelector(state => state.Order.order)
    console.log('orders:',userOrders)
    const dispatch = useDispatch()
    
    dispatch(fetchOrders())
    return(
        <>
        <h1>Orders</h1>
        <div style={{backgroundColor:'white', width:'40%',padding:'10px', margin:'5% 5% 5% 5%'}}>
            {userOrders.map((item,index)=>
            <div key={index}>
            <h3>User:{item.user}</h3>
            <h3>Product Name:{item.product_name} </h3>
            <h3>Total Product:{item.total_product}</h3>
            <button type="button"  style={{width:'40%',padding:'10px', backgroundColor:'cadetblue'}}><Link to='/payment'>Continue</Link></button>
            </div>
            )}
            </div>
        </>
    )
}