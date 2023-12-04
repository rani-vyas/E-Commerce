import React, { useEffect } from "react";
import './categories.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../slice/categorySlice";
import { Link } from "react-router-dom";
 function Category(){
    const data = useSelector(state => state.categories.data)
    console.log(data)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(fetchUserById())
    },[dispatch])
   
    return(
        <>
          <div className="Img_Container">
                  {data.map((item,index)=>
              <div className="image-div" key={index}>
              <img
                  src={item.image}            
                  className="img-fluid"
                  alt="Responsive image"
                  />
                <button type="button" className="btn">
                  <Link to='/womens' style={{ textDecoration: 'none', color: 'black' }}>
                  {item.name}  
              </Link>
            </button>
              </div>
            )}
        </div>      
    </>
    );
}
export default Category