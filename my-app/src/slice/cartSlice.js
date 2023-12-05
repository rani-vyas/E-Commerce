import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import React from "react";

const initialState = {
    isAuthenticated : false,
    Cart:[]
}
//const token = 'dc698c58de090c5503185674062de95340fef996'
//localStorage.setItem('token' , token )
export  const fetchuserById = createAsyncThunk(
    'PostData',
    async(cartItems)=>{   
    const productdata = await axios({
        "url":'http://127.0.0.1:8000/cart/',
        "method":"POST",
        "headers":{
            //'Authorization': `token ${ token } `,
            "Accept":'application/json',
            "Content-Type":"application/json"
        },
        "data":cartItems
    })
    return productdata.data;
    }
)
export const cartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        
        addtoCart:(state,action)=>{
           debugger;
           state.isAuthenticated = true;
         const newItem = action.payload;
        state.Cart.push(newItem)
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.Cart = state.Cart.filter((item) => item.id !== itemId);
          }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchuserById.fulfilled,(state,{payload})=>{
            if(payload.token){
                localStorage.getItem('token')
            }
          // state.Cart = action.payload;
            state.isAuthenticated = true; 
    })
}
})
export const {addtoCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;