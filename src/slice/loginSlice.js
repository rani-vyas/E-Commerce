import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isUserlogin : false,
  data: [{}]
}

 const token = 'dc698c58de090c5503185674062de95340fef996'
 
 localStorage.setItem('token', token)
 localStorage.getItem('token')
export const loginUser = createAsyncThunk(
  'loginUser',
  async (data) =>{
  
    const Userdata = await axios({
      "url": 'http://127.0.0.1:8000/login/',
            "method": "POST",
            "headers":{
              "Accept":'application/json',
              "Authorization":`token ${token}`,
              "Content-Type":'application/json',
            },
            "data": data
    }) 
   return Userdata;
  }
)
export const loginUserSlice = createSlice({
        name:'loginuser',
        initialState,
        reducers:{
          loginSuccess:(state,action)=>{
           // debugger;
            state.isUserlogin = true;
            state.data = action.payload;
          }
        },
        extraReducers:(builder) =>{
          //debugger;
          builder.addCase(loginUser.fulfilled,(state,action)=>{
           state.data = action.payload
          // state.isUserlogin = true;
          }).addCase(loginUser.rejected,(state,action)=>{
            state.isUserlogin = false;
            state.data = action.error.message || 'userlogin Failed'
          })
        }
})
export const {loginSuccess} = loginUserSlice.actions;
export default loginUserSlice.reducer;

