import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductById } from "../slice/productSlice";
import { addtoCart } from "../slice/cartSlice";
import './mensfashion.css'
function MensFashion(){
   /* const MensCategory = [
        {
            id:1,
            image:'../images/t-shirt.jpg',
            link:'/top&tees',
            text:'T-shirt&shirt'
          },{
            id:2,
            image:'../images/mendiv.jpeg',
            link:'..',
            text:'Jeans,trousers&more'
          },
          {
            id:3,
            image:'../images/tshirt.jpeg',
            text:'Formal Wear'
          },
          {
            id:4,
            image:'../images/menwatches.jpeg',
            link:'..',
            text:'Watches'
          },
          {
            id:5,
            image:'../images/mensshoes.jpeg',
            link:'..',
            text:'Casual&fomal Shoes'
          },
          {
            id:6,
            image:'../images/sunglasses.jpeg',
            link:'..',
            text:'Sunglasses&Frames'
          }
    ]*/
    const data = useSelector(state => state.Product.data)
    const dispatch = useDispatch()
   
    useEffect(()=>{
     dispatch(fetchProductById({}))
    },[])
    const handleAddToCart = (product) => {
     
     dispatch(addtoCart(product));
    //  console.log(product)
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
                        
                        {/*<p><button type="button" style={{width:'10%', padding:'10px', textDecoration:'none',
                         backgroundColor:'white', float:'left'}} onClick={AddToWishlist}><Link to='/wishlist' style={{textDecoration:'none'}}>&#128159;</Link></button></p>*/}
                </div>
            )}
        </>
    );
}
export default MensFashion;