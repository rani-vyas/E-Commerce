//import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchOrders } from "../slice/ordersSlice";
import { Link } from "react-router-dom";


export function Orders (){
    const [user,setUser] = useState('')
    const [product_name,setproduct_name] = useState('')
    const [total_product,setTotal_product] = useState('')
    //const [total_amount,setTotal_amount] = useState('')
    //const [transaction_id,setTransaction_id] = useState('')
    const userOrders = useSelector(state => state.Orders.order || [])
    console.log('orders:',userOrders)
    const dispatch = useDispatch()
    
    const orderItems = {
        'user':user,
        product_name :'top',
        total_product: 1,
        //total_amount
    }
 //   dispatch(fetchOrders(orderItems))
 dispatch({
    type : 'PLACEORDER',
    payload : orderItems
 })
    
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
        {/*   <h3>Total Amount: {item.total_amount}</h3>*/}
            <button type="button"  style={{width:'40%',padding:'10px', backgroundColor:'cadetblue'}}><Link to='/payment'>Continue</Link></button>
            </div>
            )}
            </div>
        </>
    )
}