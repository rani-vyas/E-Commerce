import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  showCart } from "../slice/cartSlice";
import axios from "axios";




export function Cart(){ 
const [itemQuatity,setitemQuantity] = useState('')
//const dispatch = useDispatch()
  const data = useSelector((state) => state.carts.Cart)
/*useEffect(()=>{
  debugger
dispatch(showCart({}))
},[])*/



  /*const handleRemoveFromCart = (itemId) => {
    //debugger
    dispatch(removeFromCart(itemId));
  };*/
  const token = localStorage.getItem('token')
  const removeCart = async(itemId) =>{
    const removeitem = await axios.delete('http://127.0.0.1:8000/cart/',`${itemId}`,{
      headers:{
        'Authorization ': `token ${token}`
      },
      data:{
        data : data
      }
    })
    return removeitem.data
  }

    return(
      <>
       
      <h2 style={{textAlign:'center'}}>ADD TO CART</h2>
        <div style={{margin:'20px', width:'50%'}}> 
        { data?.map((item,index) =>  
        <div key={index} style={{border:'2px solid black',backgroundColor:'white' , margin:'20px'}}>
        <h2 style={{margin:'20px'}}>User:{item.user}</h2>
        <h2 style={{margin:'20px'}}>Product:{item.product}</h2>
        <h2 style={{margin:'20px'}}>{item.product_qty}</h2>
         <label htmlFor="Itemquantity">Qty:</label>
         <input type="number" min='1' max='10' onChange={setitemQuantity(item.id)} {...itemQuatity}/>
          
        <button onClick={() => removeCart(item.id)} style={{width:'50%',border:'none', fontStyle:'italic',fontSize:'2rem' }}>Remove</button>

        
        </div>
      )}
        </div>
  </>
  )
        }
