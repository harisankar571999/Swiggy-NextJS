import { buildCreateSlice, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const foodMenu=createAsyncThunk("menu",async ()=>{
    const response=await axios.get('/api/foodApi')
    return response.data;

})

const menuData=createSlice({
    name:"menu",
    initialState:{
        id:null,
        category:'',
        menuData:[],
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builders)=>{
    builders 
    .addCase(foodMenu.pending,(state)=>{
          state.loading=true
    })
    .addCase(foodMenu.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.menuData=action.payload.menuData
    })
    .addCase(foodMenu.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
   }

})
export default menuData.reducer
