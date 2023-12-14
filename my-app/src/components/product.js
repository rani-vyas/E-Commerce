import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../slice/productSlice";
import { addtoCart } from "../slice/cartSlice";
import './womens.css';
export const Products = () =>{
  
 const data = useSelector((state) => state.Product.data)
 const dispatch = useDispatch()

 useEffect(()=>{
    //debugger;
  dispatch(fetchProductById({}))
 },[])
 
 const handleAddToCart = () => {
  dispatch(addtoCart())
};

    return(
        <>
            {data.map((item,index)=>

                <div className="card" key={index} style={{width:'20%', marginTop:'50px', float:'left'}}>
                   
                    <img src={item.image} className="top&tees" alt="Denim Jeans" style={{width:"100%", border:'1px solid black'}}/>
                    <div style={{fontStyle:'italic',fontSize:'1rem'}}>
                        <h5>{item.name}</h5>
                        <h5>{item.description}</h5>
                        <h5>{item.price}</h5>
                    </div>
                        <p><button onClick={()=>handleAddToCart(item)} style={{textDecoration:'none',borderRadius:'10px'}}><Link to='/cart' style={{textDecoration:'none'}}>Add Cart</Link></button></p>
                        
                        {/*<p><button type="button" style={{width:'10%', padding:'10px', textDecoration:'none',
                         backgroundColor:'white', float:'left'}} onClick={AddToWishlist}><Link to='/wishlist' style={{textDecoration:'none'}}>&#128159;</Link></button></p>*/}
                </div>
            )}
        </>
    );
}
//export default womensCategory;