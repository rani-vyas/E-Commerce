import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData , removeFromCart } from "../slice/cartSlice";
import { Link } from "react-router-dom";
import {  PlaceOrder } from "../slice/ordersSlice";




export function Cart(){ 
const [ItemQuantities,setItemQuantites] = useState({})
const [user,setUser] = useState('');
const [product,setProduct] =useState('');
const [product_qty,setproduct_qty] = useState(1)
//const [image,setImage] = useState('')


console.log(user)
console.log(product)
console.log(product_qty)

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
  
 

 const handlePlaceOrder = async (item) => {
   // debugger;
    const ordersData = {
      "user": user,
      //image:image,
      product:1,
      product_qty: parseInt(product_qty),
    };
    dispatch(fetchCartData(ordersData))
   // dispatch(PlaceOrder(ordersData))
 }
   /* try {
        dispatch(fetchCartData(ordersData));
     // dispatch(buyNow(ordersData));
     // console.log(buyNow)
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };*/
  
  const handleUserChange = (event) => {
   // debugger;
    setUser(event.target.value);
    console.log('user',user)
  };
  
  const handleProductQtyChange = (event) => {
    setproduct_qty(event.target.value);
    console.log(product_qty)
  };
    return(
      <>
       
      <h2 style={{textAlign:'center'}}>ADD TO CART</h2>
        <div style={{margin:'20px', width:'40%'}}> 
        {data.map((item,index)=>
        <div key={index} style={{border:'2px solid black',backgroundColor:'white' , margin:'20px'}}>
        
       {/* <h2 style={{margin:'20px'}}>{item.user}</h2>*/}
        <input type="text" value={item.user} onChange={handleUserChange} /> 

        <h2><img src={item.image} alt="img" style={{width:'40%', marginLeft:'10px' , border:'1px solid black'}}/></h2>
        <h2 style={{margin:'20px'}}>{item.product}</h2>
        <label>ProductQuantity</label>
        <input type="number"  value={item.product_qty} onChange={handleProductQtyChange} />
       {/* <h2 style={{margin:'20px'}}>{item.product_qty}</h2>
        {/*<h4 style={{margin:'20px'}}>{item.created_at}</h4>*/}

        <button type="button"  id='demo' onClick={() =>handleDecrement(item.id)} style={{width:'3%', padding:'5px', margin:'20px 20px'}}>{item.product_qty}-</button>
        <h6 style={{ display:'inline', padding:'10px' , width:'5%',backgroundColor:'white'}}>{ItemQuantities[item.id] || 1}</h6>
        <button type="button" id="demo" onClick={() =>handleIncrement(item.id)} style={{width:'3%' , padding:'5px' , margin:'20px 20px'}}>{item.product_qty}+</button>
        <button onClick={() => handleRemoveFromCart(item.id)} style={{width:'20%'}}>Remove</button>
        <button type="button" onClick={() => handlePlaceOrder(item.id)} style={{width:'40%', padding:'10px', marginLeft:'50px'}}><Link to='/orders'>PLACE ORDER</Link></button>
        </div>
      )}
        </div>
  </>
  )
        }
