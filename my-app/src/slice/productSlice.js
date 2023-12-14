import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isUserAuthenticated : false,
    data:[]
}

export const fetchProductById = createAsyncThunk(
    'fetchproduct',
    async()=>{
     //   debugger;
     
     const token = localStorage.getItem('token')
     console.log('producttoken=' , token)
    const {data} =  await axios.get('http://127.0.0.1:8000/product/',{
        headers:{
            'Authorization':` Token ${ token } `,
            'Content-Type' : 'application/json',
            'Accept':'application/json'
        }
    })
    return data.results
    
}
)
export const ProductSlice = createSlice({
    name:'FetchProduct',
    initialState,
    reducers:{
        showProduct(state , action){
            return state.data = action.payload;
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