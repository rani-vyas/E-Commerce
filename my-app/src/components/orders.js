//import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchOrders } from "../slice/ordersSlice";
import { Link } from "react-router-dom";


export function Orders (){

    const [user,setUser] = useState('')
    const [product_name,setproduct_name] = useState('')
    const [total_product,setTotal_product] = useState('')

    const userOrders = useSelector(state => state.Orders.order || []);

    const dispatch = useDispatch();
    
    /*const orderItems = {
        'user':user,
        product_name :'top',
        total_product: 1,
        
    }*/
   //dispatch(fetchOrders(orderItems))
//console.log(fetchOrders)
useEffect(() => {
    const orderItems = {
      'user': user,
      product_name: "top",
      total_product: 1,
    };
    dispatch(fetchOrders(orderItems));
  }, [dispatch, user]);
    return(
        <>
        <h1>Orders</h1>
        <div style={{backgroundColor:'white', width:'40%',padding:'10px', margin:'5% 5% 5% 5%'}}>
            {userOrders.map((item,index)=>
            <div key={index}>
                <h2>{item.product_id}</h2>
            <h3>{item.user}</h3>
            <h3>{item.product_name} </h3>
            <h3>{item.total_product}</h3>
            <button type="button"  style={{width:'40%',padding:'10px', backgroundColor:'cadetblue'}}><Link to='/payment'>Continue</Link></button>
            </div>
            )}
            </div>
        </>
    )
}