import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import React from "react";

const initialState = {
    order :[]
}
const token = '9e4f5ece5043831600098c3c32f6e467007d5b05';
//localStorage.setItem('token' , token)
export const fetchOrders = createAsyncThunk(
    'POSTDATA',
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
       /* showOrder:(state)=>{
            //debugger;
            return state;
        },*/
        PlaceOrder:(state,action)=>{
            //debugger;
            const newOrder = action.payload;
            state.order.push(newOrder);
        },
        ContinueOrder :(state,action) =>{
            const payment = action.payload;
            state.order.push(payment);
        }
    },
    extraReducers:(builder)=>{
        //debugger;
        builder.addCase(fetchOrders.fulfilled,(state,action)=>{
            state.order = action.payload;
        })
    }

})
export const {showOrder,PlaceOrder,ContinueOrder} = OrderSlice.actions;
export default OrderSlice.reducer;
