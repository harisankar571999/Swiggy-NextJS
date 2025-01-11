import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const fetchHotel=createAsyncThunk('fetchHotel',async ()=>{
    const res= await axios.get(`/api/restaurantApi`)
    return res.data
})

const restuarantSlice=createSlice({
  name:"fetchHotel",
  initialState:{
    data:[],
    loading:false,
    error:null
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchHotel.pending,(state)=>{
        state.loading=true
        state.error=null;
    })
    .addCase(fetchHotel.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.error=null 
    })
    .addCase(fetchHotel.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
  }
})

export default restuarantSlice.reducer