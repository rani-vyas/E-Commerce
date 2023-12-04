import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";


const initialState = {
  data : [],
  isAuthenticated : false, 
}
//const token =   'dc698c58de090c5503185674062de95340fef996';
localStorage.setItem('token',token )
export const fetchUserById = createAsyncThunk(
    'fetchId',
    async () =>{
    //debugger;
   
    
    const {data} = await axios.get('http://127.0.0.1:8000/category/',{
      headers:{
      // 'Authorization':`token ${ token }`,
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      }
    });
    return data.results;
    }
)
export const categorySlice = createSlice({
    name:'ShowCategory',
    initialState,
    reducers:{
       showCategory(state,{payload}){
if(payload.token){
  localStorage.getItem('token' )
}
            state.isAuthenticated = true;
           // return state;
            //return { ...state, isAuthenticated: true };
        },
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchUserById.fulfilled,(state,action)=>{
          state.data=action.payload;
          state.isAuthenticated = true;
        }).addCase(fetchUserById.rejected, (state,action)=>{
          state.data = action.error.message || 'user does not logged in'
        })
    }
  })
export const {showCategory} = categorySlice.actions
export default categorySlice.reducer;