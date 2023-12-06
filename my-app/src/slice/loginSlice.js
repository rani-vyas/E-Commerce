import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  isUserlogin : false,
  data: [{}]
} 
export const loginUser = createAsyncThunk(
  'loginUser',
  async (data) =>{
   //debugger;
  try{
    const Userdata = await axios({
      "url": 'http://127.0.0.1:8000/login/',
            "method": "POST",
            "headers":{
              "Accept":'application/json',
              "Content-Type":'application/json',
            },
            "data": data
    }) ;
    
const token = Userdata.data.key;
console.log(token)
if (token) {
  localStorage.setItem('token', token);
}
  return Userdata;
  }catch(error){
throw error
  }
}
)
export const loginUserSlice = createSlice({
        name:'loginuser',
        initialState,
        reducers:{
          loginSuccess:(state,action)=>{
          state.isUserlogin = true;
          state.data = action.payload;
          }
        },
        extraReducers:(builder) =>{
          builder.addCase(loginUser.fulfilled,(state,action)=>{
           state.data = action.payload
           state.isUserlogin = true;
          }).addCase(loginUser.rejected,(state,action)=>{
            state.isUserlogin = false;
            state.data = action.error.message || 'userlogin Failed'
          })
        }
})
export const {loginSuccess} = loginUserSlice.actions;
export default loginUserSlice.reducer;

