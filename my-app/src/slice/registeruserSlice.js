import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
//import { useState } from "react";

const initialState= {
    user : null,
    data : [{}],
    error: null
}

//const token = 'dc698c58de090c5503185674062de95340fef996';
export const  registerUsers = createAsyncThunk(
    'Register', 
    async(data) =>{
        
            //debugger;
        const User = await axios({
            "url": 'http://127.0.0.1:8000/register/',
            "method": "POST",
            "headers":{
                'Content-Type':'application/json',
                Accept:'application/json'
            },
            data: data
        })
      return User.data
})
export const userSlice = createSlice({
    name:'userRegister',
    initialState,
    reducers:{},
    extraReducers :(builder) => {
       // debugger;
      builder.addCase(registerUsers.fulfilled,(state,action)=>{
       // debugger
        state.user = action.payload;
        state.error = null
      
      }).addCase(registerUsers.rejected,(state, action)=>{
            state.user = null;
            state.error = action.error.message
           });
        }
    })
//export const { Submitdata } = userSlice.actions;
export default userSlice.reducer;
