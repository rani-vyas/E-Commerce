import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchuserById, removeFromCart } from "../slice/cartSlice";
import { Link } from "react-router-dom";
import {  PlaceOrder } from "../slice/ordersSlice";




export function Cart(){ 
const [ItemQuantities,setItemQuantites] = useState({})
const [user,setUser] = useState('');
const [product,setProduct] =useState('');
const [product_qty,setproduct_qty] = useState(1)
//const [image,setImage] = useState('')
//incrementproduct
const handleIncrement = (itemId) => {
  setItemQuantites((prevQuantities) => {
    return {
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    };
  });
};
//decrement product
const handleDecrement = (itemId) => {
  setItemQuantites((prevQuantities) => {
    const currentQuantity = prevQuantities[itemId] || 0;
    if (currentQuantity > 1) {
      return {
        ...prevQuantities,
        [itemId]: currentQuantity - 1,
      };
    }
    return prevQuantities;
  });
};



  const data = useSelector(state => state.carts.Cart)
 // console.log('cartitem:',data)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  const buyNow = (order)=>{
    debugger;
    dispatch(PlaceOrder(order))
   }
  /*const cartdata = {
    'user':user,
    product:1,
    product_qty:parseInt(product_qty),
  }  
  dispatch(fetchuserById(cartdata))
  buyNow(item)*/
 /* const handlePlaceOrder = (item) => {
    const ordersData = {
      user: user,
      product: 1,
      product_qty: parseInt(product_qty),
    };
    dispatch(fetchuserById(ordersData));
    buyNow(ordersData);
  };*/

  const handlePlaceOrder = async (item) => {
    debugger;
    const ordersData = {
      "user": user,
      product:2,
      product_qty: parseInt(product_qty),
    };
  
    try {
      // Dispatch fetchuserById
      await dispatch(fetchuserById(ordersData));
  
      // Dispatch buyNow
      dispatch(buyNow(ordersData));
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  
    return(
      <>
       
      <h2 style={{textAlign:'center'}}>ADD TO CART</h2>
        <div style={{margin:'20px', width:'40%'}}> 
        {data.map((item,index)=>
        <div key={index} style={{border:'2px solid black',backgroundColor:'white' , margin:'20px'}}>
        {item.id}
        <h2 style={{margin:'20px'}}>{item.user}</h2>
        <h2><img src={item.image} alt="img" style={{width:'40%', marginLeft:'10px'}}/></h2>
        <h2 style={{margin:'20px'}}>{item.product}</h2>
        <h2 style={{margin:'20px'}}>{item.product_qty}</h2>
        {/*<h4 style={{margin:'20px'}}>{item.created_at}</h4>*/}

        <button type="button"  id='demo' onClick={() =>handleDecrement(item.id)} style={{width:'3%', padding:'5px', margin:'20px 20px'}}>{item.product_qty}-</button>
        <h6 style={{ display:'inline', padding:'10px' , width:'5%',backgroundColor:'white'}}>{ItemQuantities[item.id] || 1}</h6>
        <button type="button" id="demo" onClick={() =>handleIncrement(item.id)} style={{width:'3%' , padding:'5px' , margin:'20px 20px'}}>{item.product_qty}+</button>
        <button onClick={() => handleRemoveFromCart(item.id)} style={{width:'20%'}}>Remove</button>
        <button type="button" onClick={() => handlePlaceOrder(item)} style={{width:'40%', padding:'10px', marginLeft:'50px'}}><Link to='/orders'>PLACE ORDER</Link></button>
        </div>
      )}
        </div>
  </>
  )
        }
