import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../slice/productSlice";
import {  addtoCart, fetchCartData } from "../slice/cartSlice";
import './womens.css';

export const WomensCategory = () =>{
  
 const data = useSelector(state => state.Product.data)
 const dispatch = useDispatch()
 const navigate = useNavigate()

 useEffect(()=>{
  dispatch(fetchProduct({}))
 },[])

 const handleAddToCart = async(product) => {   
    console.log("Product:" , product)
    debugger;
    const newItem = {
        
        'user' : 1,
        'image' : product.image,
        'product' : product.id,
        'product_qty' : product.product_qty
    }
     
  dispatch(addtoCart(newItem))
  dispatch(fetchCartData(newItem));
    navigate('/cart');
    
};

    return(
        <>
            {data?.map((item,index)=>
                <div className="card" key={index} style={{width:'20%', marginTop:'20px'}} >
                   
                    <h2>{item.id}</h2>
                    <div style={{fontStyle:'italic',fontSize:'1rem'}}>
                        <h5>{item.name}</h5>
                        <h5>{item.description}</h5>
                        <h5>{item.price}</h5>
                    </div>
                        <p><button onClick={()=>handleAddToCart(item)} style={{textDecoration:'none',borderRadius:'10px' }}>Add Cart</button></p>
                        
                        {/*<p><button type="button" style={{width:'10%', padding:'10px', textDecoration:'none',
                         backgroundColor:'white', float:'left'}} onClick={AddToWishlist}><Link to='/wishlist' style={{textDecoration:'none'}}>&#128159;</Link></button></p>*/}
                </div>
            )}
            
        </>
    );
}
//export default womensCategory;