import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

const initialState = {
    isUserAuthenticated : false,
    data:[]
}
const token = 'dc698c58de090c5503185674062de95340fef996'
export const fetchProductById = createAsyncThunk(
    'fetchproduct',
    async()=>{
    const {data} =  await axios.get('http://127.0.0.1:8000/product/',{
        headers:{
            'Authorization':`Token ${token}`,
            'Content-Type' : 'application/json',
            'Accept':'application/json'
        }
    })
    return data.results
    }
)
export const ProductSlice = createSlice({
    name:'Product',
    initialState,
    reducers:{
        showProduct(state){
            return state
        },
       
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchProductById.fulfilled,(state,action)=>{
          state.data=action.payload;
          state.isUserAuthenticated = true;
        })
    }
})
export const {showProduct} = ProductSlice.actions
export default ProductSlice.reducer