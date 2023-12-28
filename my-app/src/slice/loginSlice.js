import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const initialState = {
  isUserlogin : null,
  error : null,
  data: [{}],
} 
debugger;
export const loginUser = createAsyncThunk(
  'loginUser',
  async (data,{rejectWithValue}) =>{
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
  debugger;
  localStorage.setItem('token', token);
  console.log('logintoken : ',token)
  useNavigate('/home')
 
}
return Userdata;
  }catch(error){
    return rejectWithValue(error.response.data)
  }
}
)

export const loginUserSlice = createSlice({
        name:'loginuser',
        initialState,
        reducers:{},
        extraReducers:(builder) =>{
          builder.addCase(loginUser.fulfilled,(state,action)=>{
            debugger
          state.isUserlogin = action.payload;
          state.error = null
          }).addCase(loginUser.rejected,(state,action)=>{
            debugger
            state.isUserlogin = null;
            state.data = action.error.message || 'userlogin Failed'
          })
        }
})
//export const {loginSuccess} = loginUserSlice.actions;
export default loginUserSlice.reducer;

