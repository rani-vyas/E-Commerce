import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//import React from "react";



export  const fetchCartData = createAsyncThunk(
    'showCartData',
    async({user,product,product_qty})=>{  
        debugger;
        const token = localStorage.getItem('token') 
        console.log('Carttoken:',token)
    const productdata = await axios.post('http://127.0.0.1:8000/cart/',
    {
        user,
        product,
        product_qty
    },{
        headers:{
            'Authorization' : `token ${token}`,
            "Content-Type" : 'application/json',
            "Accept" : 'application/json'
        }
    }
    )

        console.log(productdata.data);
        return productdata.data; 
    }
)

export const cartSlice = createSlice({
    name:'Cart',
    initialState :{
        Cart : [{}]
    },
    reducers:{
        addtoCart:(state,action)=>{
            debugger
            const newItem = {...action.payload};
            state.Cart = [{newItem}]
            /*const itemInCart = state.Cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.Cart.push({ ...action.payload, product_qty: 1 });
      }*/

    },
    showCart : (state,action) => {
        debugger
        state.Cart = action.payload;
    }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCartData.fulfilled,(state,action)=>{
            state.Cart = action.payload
        }).addCase(fetchCartData.rejected,(state,action)=>{
            state.Cart = action.error.message;
        })
    }
        
       
        /*removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.Cart = state.Cart.filter((item) => item.id !== itemId);
          },
         
    },*/
})
export const {addtoCart,showCart} = cartSlice.actions
export default cartSlice.reducer;