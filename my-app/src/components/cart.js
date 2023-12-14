import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData , removeFromCart } from "../slice/cartSlice";
import { Link } from "react-router-dom";
import {  PlaceOrder, fetchOrders } from "../slice/ordersSlice";




export function Cart(){ 
const [ItemQuantities,setItemQuantites] = useState({})
const [user,setUser] = useState('');
const [product,setProduct] =useState('');
const [product_qty,setproduct_qty] = useState()

console.log(user)
console.log(product)
console.log(product_qty)

//incrementproduct
const handleIncrement = (itemId) => {
  //debugger;
  setItemQuantites((prevQuantities) => {
    return {
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    };
  });
};

//decrement product
const handleDecrement = (itemId) => {
  //debugger
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
  
 dispatch(fetchCartData())

 const handlePlaceOrder = async () => {
  
    const ordersData = {
      "user": user,
      product:1,
      product_qty: parseInt(product_qty),
    };
    console.log('sending order data:',ordersData)
    dispatch(fetchOrders(ordersData))
   
 }
   
    return(
      <>
       
      <h2 style={{textAlign:'center'}}>ADD TO CART</h2>
        <div style={{margin:'20px', width:'40%'}}> 
        {data.map((item,index)=>
        <div key={index} style={{border:'2px solid black',backgroundColor:'white' , margin:'20px'}}>
        
        <h2 style={{margin:'20px'}}>{item.user}</h2>
        <h2><img src={item.image} alt="img" style={{width:'40%', marginLeft:'10px' , border:'1px solid black'}}/></h2>
        <h2 style={{margin:'20px'}}>{item.product}</h2>
        <h2 style={{margin:'20px'}}>{item.product_qty}</h2>

        <button type="button"  id='demo' onClick={() =>handleDecrement(item.id)} style={{width:'3%', padding:'5px', margin:'20px 20px', border:'none',fontSize:'2rem'}}>{item.product_qty}-</button>
        <h6 style={{ display:'inline', padding:'10px' , width:'5%',backgroundColor:'white'}}>{ItemQuantities[item.id] || 1}</h6>

        <button type="button" id="demo" onClick={() =>handleIncrement(item.id)} style={{width:'3%' , padding:'5px' , margin:'20px 20px', border:'none',fontSize:'2rem'}}>{item.product_qty}+</button>
        <button onClick={() => handleRemoveFromCart(item.id)} style={{width:'20%',border:'none', fontStyle:'italic',fontSize:'2rem'}}>Remove</button>

        <button type="button" onClick={() => handlePlaceOrder(item.id)} style={{width:'40%', padding:'10px', marginLeft:'50px', borderRadius:'10px', backgroundColor:'orange'}}><Link to='/orders' style={{textDecoration:'none',color:'whitesmoke'}}>PLACE ORDER</Link></button>
        </div>
      )}
        </div>
  </>
  )
        }
