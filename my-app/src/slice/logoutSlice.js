import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
     isloggedIn : true
}
export const userLogout = createAsyncThunk(
    'userLogout',
    async () =>{
       
        const logoutUser = await axios({
            'url' : 'http://127.0.0.1:8000/logout/',
            'method' : 'POST',
            "headers":{
                "Accept":'application/json',
                "Content-Type":'application/json',
              },
        });
        return logoutUser.data; 
    }
   
);
export const authSlice = createSlice({
    name:'logoutUser',
    initialState,
    reducers :(builder) =>  {
        builder.addCase(userLogout.fulfilled, (state) => {
            state.isLoggedIn = false;
            
        });

    }
})
export default authSlice.reducer; 