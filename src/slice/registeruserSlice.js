import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { useState } from "react";

const initialState= {
    isRegistered: false,
    data : [{}],
    error: null
}


/*const result = {
    username:'naviesman',
    email:'navie@mail.com',
    password1:'userpassword8989',
    password2:'userpassword8989'
};*/

//const token = 'dc698c58de090c5503185674062de95340fef996';
export const  registerUsers = createAsyncThunk(
    'Register', 
    
    async(data) =>{
        debugger;
        console.log(data)
        const User = await axios({
            "url": 'http://127.0.0.1:8000/register/',
            "method": "POST",
            "headers":{
                'Content-Type':'application/json',
                "Accept":'application/json'
            },
            "data": data
        })
        return User.data;
    }
)
export const userSlice = createSlice({
    name:'userRegister',
    initialState,
    reducers:{
        Submitdata:(state,action)=>{
            debugger;
            state.isRegistered = true;
            state.data = action.payload;
        }
    },
    extraReducers :(builder) =>{
       // debugger;
      builder.addCase(registerUsers.fulfilled,(state,action)=>{
        if(action.payload ===undefined){
            state.isRegistered = true;
            state.data = {};
        }else{
            state.isRegistered = true;
            state.data = action.payload;
        }
       
      })
        .addCase(registerUsers.rejected,(state, action)=>{
            state.isRegistered = false;
            state.error = action.error.message
           });
        }
    })
export const {Submitdata } = userSlice.actions;
export default userSlice.reducer;
