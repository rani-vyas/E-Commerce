import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchProduct, fetchProductById } from "../slice/productSlice";
import { addtoCart, fetchCartData } from "../slice/cartSlice";
import './mensfashion.css'
function MensFashion(){
    const navigate = useNavigate()
    const data = useSelector(state => state.Product.data)
    const dispatch = useDispatch()
   
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
        <h1>Mens Fashion</h1>
        {data.map((item,index)=>
                <div className="card" key={index} style={{width:'50%'}}>
                   
                    <img src={item.image} className="top&tees" alt="Denim Jeans" style={{width:"100%"}}/>
                    <div style={{fontStyle:'italic',fontSize:'1rem'}}>
                        <h5>{item.name}</h5>
                        <h5>{item.description}</h5>
                        <h5>{item.price}</h5>
                    </div>
                    <p><button onClick={()=>handleAddToCart(item)} style={{textDecoration:'none'}}><Link to='/cart'>Add Cart</Link></button></p>
                        
                        <p><button type="button" style={{width:'10%', padding:'10px', textDecoration:'none',
                         backgroundColor:'white', float:'left'}} ><Link to='/wishlist' style={{textDecoration:'none'}}>&#128159;</Link></button></p>
                </div>
            )}
        </>
    );
}
export default MensFashion;