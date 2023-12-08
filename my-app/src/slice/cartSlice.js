import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import React from "react";

const initialState = {
    isAuthenticated : false,
    Cart:[]
}

export  const fetchCartData = createAsyncThunk(
    'PostData',
    async(cartItems)=>{  
        const token = localStorage.getItem('token') 
        console.log('Carttoken:',token)
    const productdata = await axios({
        "url":'http://127.0.0.1:8000/cart/',
        "method":"POST",
        "headers":{
            'Authorization': `token ${ token } `,
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
           //debugger;
           state.isAuthenticated = true;
         const newItem = action.payload;
        state.Cart.push(newItem)
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.Cart = state.Cart.filter((item) => item.id !== itemId);
          },
          setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
          },
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchCartData.fulfilled,(state,{payload})=>{
            if(payload.user){
                state.isAuthenticated = true; 
            }
          // state.Cart = action.payload;
           
    })
}
})
export const {addtoCart, removeFromCart,setAuthenticated} = cartSlice.actions
export default cartSlice.reducer;