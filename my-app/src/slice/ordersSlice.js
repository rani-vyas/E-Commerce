import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import React from "react";

const initialState = {
    order :[],
    isAuthenticated : false
}
const token = localStorage.getItem('token')
console.log('token' , token)
export const fetchOrders = createAsyncThunk(
    'Fetch_Orders',
    async(orders)=>{ 
        const {UserOrders} = await axios({    
            "url":'http://127.0.0.1:8000/order/',
            "method":"POST",
            "headers":{
                "Accept":'application/json',
                "Authorization":`token ${token}`,
                "Content-Type":"application/json"
            },
            "data":orders
        })
        return UserOrders
}
)
export const OrderSlice = createSlice({
    
    name:'Order',
    initialState,
    reducers:{
      
        PlaceOrder:(state,action)=>{
           // debugger;
           const newOrder = action.payload;
            state.order.push(newOrder);
        },
       
    },
    extraReducers:(builder)=>{
        //debugger;
        builder.addCase(fetchOrders.fulfilled,(state,action)=>{
            state.order = action.payload;
            state.isAuthenticated = true;
        })
    }

})
export const {showOrder,PlaceOrder,ContinueOrder} = OrderSlice.actions;
export default OrderSlice.reducer;
